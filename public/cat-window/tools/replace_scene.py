"""Split the supplied complete SVG into aligned editable layers without retracing.

Clip the original cubic curves exactly using de Casteljau subdivisions. The
stationary scene receives a small vector backing behind the extracted tail,
so curling it reveals the window rather than transparent holes in the trace.
"""
from pathlib import Path
import ast, copy, json, re
import xml.etree.ElementTree as E
ROOT=Path(__file__).resolve().parents[1]
NS='http://www.w3.org/2000/svg'
E.register_namespace('', NS)
module=ast.parse((ROOT/'tools/build_scene.py').read_text())
space={'re':re}
exec(compile(ast.Module(body=[n for n in module.body if isinstance(n,ast.FunctionDef) and n.name=='paths'],type_ignores=[]),'svg_paths','exec'),space)
parse=space['paths']
scale=1280/2170

def mix(a,b,t):return tuple(x+(y-x)*t for x,y in zip(a,b))
def split(curve,t):
    a,b,c,d=curve;ab=mix(a,b,t);bc=mix(b,c,t);cd=mix(c,d,t)
    abc=mix(ab,bc,t);bcd=mix(bc,cd,t);p=mix(abc,bcd,t)
    return (a,ab,abc,p),(p,bcd,cd,d)
def point(curve,t):return split(curve,t)[0][-1]
def subcurve(c,a,b):
    left=split(c,b)[0]
    return split(left,a/b)[1] if a else left

def clip(vertices,closed,cut,left):
    assert closed
    segs=[]
    for i,v in enumerate(vertices):
        nxt=vertices[(i+1)%len(vertices)]
        c=tuple(tuple(k*scale for k in p) for p in (v['p'],v['out'],nxt['in'],nxt['p']))
        # Crossings are bracketed, then solved to sub-pixel precision.
        roots=[]
        for step in range(64):
            lo,hi=step/64,(step+1)/64
            if (point(c,lo)[0]-cut)*(point(c,hi)[0]-cut)<0:
                for _ in range(45):
                    mid=(lo+hi)/2
                    if (point(c,lo)[0]-cut)*(point(c,mid)[0]-cut)<=0:hi=mid
                    else:lo=mid
                roots.append((lo+hi)/2)
        times=[0]+roots+[1]
        for a,b in zip(times,times[1:]):
            x=point(c,(a+b)/2)[0]
            if (x<=cut if left else x>=cut):segs.append(subcurve(c,a,b))
    if not segs:return ''
    out=['M '+fmt(segs[0][0])]
    last=segs[0][0]
    for a,b,c,d in segs:
        if sum(abs(x-y) for x,y in zip(last,a))>1e-6:out.append('L '+fmt(a))
        out.append('C '+' '.join(fmt(p) for p in (b,c,d)));last=d
    return ' '.join(out)+' Z'
def fmt(p):return ' '.join(f'{x:.8f}' for x in p)
def normalized(data):
    out=[]
    for vertices,closed in parse(data):
        out.append('M '+fmt(tuple(x*scale for x in vertices[0]['p'])))
        for i in range(1,len(vertices)):
            out.append('C '+' '.join(fmt(tuple(x*scale for x in p)) for p in (vertices[i-1]['out'],vertices[i]['in'],vertices[i]['p'])))
        if closed:
            out.append('C '+' '.join(fmt(tuple(x*scale for x in p)) for p in (vertices[-1]['out'],vertices[0]['in'],vertices[0]['p'])))
            out.append('Z')
    return ' '.join(out)
def svg():return E.Element(f'{{{NS}}}svg',width='1280',height='1280',viewBox='0 0 1280 1280',fill='none')
def add(root,node,d,name):
    if not d:return
    n=copy.deepcopy(node);n.set('d',d);n.set('id',name);root.append(n)

source=E.parse(ROOT/'assets/Scene-upload.svg').getroot()
assert source.get('viewBox')=='0 0 2170 2170'
background,body,tail=svg(),svg(),svg()
E.SubElement(background,f'{{{NS}}}rect',width='1280',height='1280',fill='#BCE8E4',id='Opaque scene backing')
cat={1,8,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40}
for i,n in enumerate(source):
    if i in cat:
        contours=parse(n.get('d'))
        # A one-pixel overlap under the fixed root avoids an AA seam.
        add(body,n,' '.join(clip(v,c,480,False) for v,c in contours),f'CatBody source {i:03}')
        add(tail,n,' '.join(clip(v,c,481,True) for v,c in contours),f'CatTail source {i:03}')
    else:add(background,n,normalized(n.get('d')),f'Scene source {i:03}')
    if i==0:
        # Matching colors sampled from the source SVG's flat window regions.
        # Source frame/sill paths remain above these backing rectangles.
        for x,y,w,h,fill in [(288,207,686,927,'#F4EBDC'),(267,121,746,45,'#F3E9DA'),(267,1060,746,38,'#F3E9DA'),(289,1100,683,32,'#F3E9DA'),(338,824,602,230,'#5F8892'),(370,243,542,542,'#618A94'),(270,1000,18,57,'#BCE8E4'),(286,1000,53,57,'#EDE1CE'),(338,995,145,64,'#5F8892')]:
            E.SubElement(background,f'{{{NS}}}rect',x=str(x),y=str(y),width=str(w),height=str(h),fill=fill,id=f'Tail backing {x}')
for name,root in [('Background',background),('CatBody',body),('CatTail',tail)]:
    E.indent(root);E.ElementTree(root).write(ROOT/'assets'/f'{name}.svg',encoding='unicode')
(ROOT/'poster.svg').write_bytes((ROOT/'assets/Scene-upload.svg').read_bytes())
(ROOT/'rig.json').write_text(json.dumps({'rootY':1030,'source':'Scene-upload.svg'},indent=2)+'\n')
print('Prepared exact cubic scene layers; tail rig/timing retained')
