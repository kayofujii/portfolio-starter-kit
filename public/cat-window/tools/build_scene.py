"""Translate these three SVGs to editable RML. Uses only Python's standard library.

Supports the exact SVG subset in the supplied assets; rejects unknown geometry.
Quadratics convert exactly to cubics. SVG blinds pattern is expanded to clipped
rectangles, preserving its global user-space phase. No artwork is rasterized.
"""
from pathlib import Path
import math
import json
import re
import xml.etree.ElementTree as E

ROOT = Path(__file__).resolve().parents[1]
counter = 100
RIG_Y = json.loads((ROOT/"rig.json").read_text())["rootY"] if (ROOT/"rig.json").exists() else 1000

def element(tag, parent=None, **attrs):
    global counter
    attrs = {k: str(v) for k, v in attrs.items()}
    if 'id' not in attrs:
        counter += 1
        attrs['id'] = f'0:{counter}'
    return E.SubElement(parent, tag, attrs) if parent is not None else E.Element(tag, attrs)

def paths(data):
    tokens = re.findall(r'[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', data)
    i, command, vertices, contours = 0, None, [], []
    current = (0, 0)
    def point():
        nonlocal i
        p = (float(tokens[i]), float(tokens[i+1])); i += 2
        return p
    def vertex(p):
        return {'p': p, 'in': p, 'out': p}
    while i < len(tokens):
        if tokens[i].isalpha():
            command = tokens[i]; i += 1
        if command == 'M':
            if vertices: contours.append((vertices, False))
            current = point(); vertices = [vertex(current)]; command = 'L'
        elif command in ('L', 'H', 'V'):
            if command == 'L': p = point()
            elif command == 'H': p = (float(tokens[i]), current[1]); i += 1
            else: p = (current[0], float(tokens[i])); i += 1
            vertices.append(vertex(p)); current = p
        elif command == 'Q':
            q, p = point(), point()
            vertices[-1]['out'] = tuple(a+2/3*(b-a) for a,b in zip(current,q))
            v = vertex(p); v['in'] = tuple(a+2/3*(b-a) for a,b in zip(p,q))
            vertices.append(v); current = p
        elif command == 'C':
            outgoing, incoming, p = point(), point(), point()
            vertices[-1]['out'] = outgoing
            v = vertex(p); v['in'] = incoming
            vertices.append(v); current = p
        elif command in ('Z', 'z'):
            if vertices[-1]['p'] == vertices[0]['p']:
                vertices[0]['in'] = vertices.pop()['in']
            contours.append((vertices, True)); vertices = []; command = None
        else: raise ValueError(f'Unsupported SVG command: {command}')
    if vertices: contours.append((vertices, False))
    return contours

def weights(p):
    # Same continuous weight field for both fill contours and their handles.
    # Root (x=480), middle (400), tip (320); root side remains anchored.
    t = max(0, min(2, (480-p[0])/80))
    a = min(1, int(t)); f = t-a
    if f <= 0: return 255, a+1
    if f >= 1: return 255, a+2
    low = round(255*(1-f)); high = 255-low
    return low | (high << 8), (a+1) | ((a+2) << 8)

def add_path(shape, verts, closed, tail):
    area = sum(a['p'][0]*b['p'][1]-b['p'][0]*a['p'][1] for a,b in zip(verts, verts[1:]+verts[:1]))
    path = element('PointsPath', shape, name='Editable contour', isClosed=str(closed).lower(), isClockwise=str(area>=0).lower())
    for v in verts:
        p = v['p']; attrs = {'x':p[0], 'y':p[1]}
        for side in ('in', 'out'):
            dx,dy = (v[side][k]-p[k] for k in (0,1))
            attrs[side+'Rotation'] = math.atan2(dy,dx)
            attrs[side+'Distance'] = math.hypot(dx,dy)
        vert = element('CubicDetachedVertex', path, **attrs)
        if tail:
            attrs = {}
            for side,prefix in [('p',''),('in','in'),('out','out')]:
                values,indices = weights(v[side])
                attrs[prefix+'Values' if prefix else 'values'] = values
                attrs[prefix+'Indices' if prefix else 'indices'] = indices
            element('CubicWeight', vert, **attrs)
    if tail:
        skin = element('Skin', path, name='Tail vector skin')
        for n,x in enumerate((480,400,320)):
            element('Tendon', skin, boneId=f'0:{40+n}', xx=-1, xy=0, yx=0, yy=-1, tx=x, ty=RIG_Y, name=('Root','Middle','Tip')[n])

def color(value): return 'FF'+value.removeprefix('#').upper()

def translate(source, name, tail=False):
    svg = E.parse(ROOT/'assets'/source).getroot()
    assert svg.attrib['viewBox'] == '0 0 1280 1280'
    group = element('Node', art, name=name)
    shapes = []
    gradients = {x.attrib['id']: x for x in svg.iter() if x.tag.split('}')[-1] in ('radialGradient','linearGradient')}
    def visit(node, inherited):
        tag = node.tag.split('}')[-1]
        a = inherited | node.attrib
        if tag in ('svg','g'):
            for child in node: visit(child, a)
            return
        if tag == 'defs': return
        if tag not in ('path','rect'): raise ValueError(tag)
        if a.get('fill') == 'url(#blinds)':
            # Global pattern coordinates, clipped to the original rectangle.
            x,y,w,h = [float(a[k]) for k in ('x','y','width','height')]
            for base,thickness,fill,opacity in [(4,8,'#8FB5BC',.75),(12,4,'#426B79',.55)]:
                for n in range(50):
                    top=max(y,n*27+base-thickness/2); bottom=min(y+h,n*27+base+thickness/2)
                    if bottom>top:
                        visit(E.Element('rect',x=str(x),y=str(top),width=str(w),height=str(bottom-top),fill=fill,opacity=str(opacity)),{})
            return
        s=element('Shape', name=node.attrib.get('id', f'{name} {len(shapes)+1:02}'), opacity=a.get('opacity',1)); shapes.append(s)
        if tag=='rect':
            x,y,w,h = [float(a.get(k,0)) for k in ('x','y','width','height')]
            # Shape stays at identity so gradients use artboard coordinates.
            v=[{'p':p,'in':p,'out':p} for p in [(x,y),(x+w,y),(x+w,y+h),(x,y+h)]]
            add_path(s,v,True,tail); bounds=(x,y,x+w,y+h)
        else:
            contours=paths(a['d'])
            for verts,closed in contours: add_path(s,verts,closed,tail)
            pts=[v[k] for vs,_ in contours for v in vs for k in ('p','in','out')]
            bounds=(min(p[0] for p in pts),min(p[1] for p in pts),max(p[0] for p in pts),max(p[1] for p in pts))
        for paint,value in [('Fill',a.get('fill','#000000')),('Stroke',a.get('stroke','none'))]:
            if value=='none': continue
            attrs={'name':paint}
            if paint=='Stroke': attrs |= {'thickness':a.get('stroke-width',1),'cap':a.get('stroke-linecap','butt'),'join':a.get('stroke-linejoin','miter')}
            p=element(paint,s,**attrs)
            if value.startswith('url('):
                grad=gradients[value[5:-1]]; kind=grad.tag.split('}')[-1]
                x,y,r,b=bounds
                if kind=='linearGradient': attrs=dict(startX=x,startY=y,endX=x,endY=b)
                else: attrs=dict(startX=(x+r)/2,startY=(y+b)/2,endX=r,endY=(y+b)/2)
                g=element(kind[0].upper()+kind[1:],p,name=value[5:-1],**attrs)
                for stop in grad:
                    element('GradientStop',g,colorValue=color(stop.attrib['stop-color']),position=stop.attrib.get('offset',0))
            else: element('SolidColor',p,colorValue=color(value),name='Original SVG color')
    visit(svg,{})
    # Rive declaration order is front-to-back, inverse of SVG painting order.
    group.extend(reversed(shapes))

doc=E.Element('Rive',version='1',kind='fragment')
art=element('Artboard',doc,id='0:2',name='CatWindow',width=1280,height=1280,styleId='0:5',defaultStateMachineId='0:7')
element('LayoutComponentStyle',art,id='0:5',name='Artboard Style')
translate('CatBody.svg','CatBody')
translate('CatTail.svg','CatTail',tail=True)
translate('Background.svg','Background')
root=element('RootBone',art,id='0:40',name='TailRoot (fixed)',x=480,y=RIG_Y,length=80,rotation=math.pi)
mid=element('Bone',root,id='0:41',name='TailMiddle',length=80,rotation=0)
element('Bone',mid,id='0:42',name='TailTip',length=55,rotation=0)
sm=element('StateMachine',art,id='0:7',name='CatStateMachine')
layer=element('StateMachineLayer',sm,name='Sleeping')
element('AnyState',layer,x=200,y=-120)
element('ExitState',layer,x=400,y=-120)
entry=element('EntryState',layer,x=0,y=0)
element('StateTransition',entry,stateToId='0:12')
element('AnimationState',layer,id='0:12',animationId='0:6',x=200,y=0)
anim=element('LinearAnimation',art,id='0:6',name='Idle',duration=180,fps=60,loopValue='loop')
for bone,peak in [(41,.14),(42,.26)]:
    obj=element('KeyedObject',anim,objectId=f'0:{bone}')
    prop=element('KeyedProperty',obj,propertyKey=15)
    for frame,value in [(0,0),(90,peak),(180,0)]:
        k=element('KeyFrameDouble',prop,frame=frame,value=value,interpolationType='cubic')
        element('CubicEaseInterpolator',k,x1=.42,y1=0,x2=.58,y2=1)
E.indent(doc)
E.ElementTree(doc).write(ROOT/'scene.rml',encoding='unicode',xml_declaration=False)
print(f'Wrote {ROOT / "scene.rml"}')
