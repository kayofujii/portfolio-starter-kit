"""Place the supplied plant in shared scene coordinates, with native vector shadows."""
from pathlib import Path
import copy
import re
import xml.etree.ElementTree as E

ROOT = Path(__file__).resolve().parents[1]
NS = 'http://www.w3.org/2000/svg'
E.register_namespace('', NS)

def transform(data, dx=0, dy=0):
    tokens = re.findall(r'[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', data)
    out=[]; command=None; index=0
    for token in tokens:
        if token.isalpha():
            command=token; index=0; out.append(token)
            if command not in ('M','L','C','Q','H','V','Z','z'):
                raise ValueError(command)
        else:
            value=float(token)*1.05
            vertical=command=='V' or (command!='H' and index%2==1)
            value += (826+dy) if vertical else (780+dx)
            out.append(f'{value:.5f}'.rstrip('0').rstrip('.')); index+=1
    return ' '.join(out)

background=E.parse(ROOT/'assets/Background.svg').getroot()
# The legacy plant starts at the first terracotta pot path. On repeat runs,
# remove the previously authored replacement group instead.
start=next((i for i,n in enumerate(background) if n.attrib.get('d','').startswith('M805 959') or n.attrib.get('id')=='Plant'), None)
if start is None: raise ValueError('Cannot find plant boundary')
for n in list(background)[start:]: background.remove(n)
plant=E.SubElement(background,f'{{{NS}}}g',id='Plant')
source=list(E.parse(ROOT/'assets/Plant-upload.svg').getroot())
shadow=E.SubElement(plant,f'{{{NS}}}g',id='Plant cast shadow',fill='#335D69',opacity='0.16')
for i in (0,1,3,4,6,7,9):
    E.SubElement(shadow,f'{{{NS}}}path',d=transform(source[i].attrib['d'],-13,7))
E.SubElement(plant,f'{{{NS}}}path',id='Pot contact shadow',d='M822 1025 C822 1021 840 1019 858 1019 C878 1019 896 1021 896 1025 C896 1029 878 1031 858 1031 C840 1031 822 1029 822 1025Z',fill='#776C57',opacity='0.16')
for i,node in enumerate(source):
    node=copy.deepcopy(node)
    node.set('d',transform(node.attrib['d']))
    node.set('id',f'Plant detail {i+1:02}')
    plant.append(node)
E.indent(background)
E.ElementTree(background).write(ROOT/'assets/Background.svg',encoding='unicode')

poster=E.Element(f'{{{NS}}}svg',width='1280',height='1280',viewBox='0 0 1280 1280')
for name in ('Background','CatTail','CatBody'):
    group=E.SubElement(poster,f'{{{NS}}}g',id=name)
    group.extend(E.parse(ROOT/'assets'/f'{name}.svg').getroot())
E.ElementTree(poster).write(ROOT/'poster.svg',encoding='unicode')
print('Updated background plant and poster')
