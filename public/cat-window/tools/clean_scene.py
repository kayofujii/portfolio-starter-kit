"""Clean the traced illustration into simple native vectors at the same coordinates.

Preserves the scene palette/composition and existing tail rig. Window geometry
uses exact straight lines; plant contours use a few continuous cubic curves; the cat uses the supplied SVG.
The supplied SVG remains untouched in assets/Scene-upload.svg for reference.
"""
from pathlib import Path
import json
import xml.etree.ElementTree as E
ROOT=Path(__file__).resolve().parents[1]
NS='http://www.w3.org/2000/svg';E.register_namespace('',NS)
def svg():return E.Element(f'{{{NS}}}svg',width='1280',height='1280',viewBox='0 0 1280 1280',fill='none')
def add(root,tag,**a):return E.SubElement(root,f'{{{NS}}}{tag}',{k.replace('_','-'):str(v) for k,v in a.items()})
def rect(x,y,w,h,color,name):add(bg,'rect',x=x,y=y,width=w,height=h,fill=color,id=name)
def path(root,d,color,name,**a):add(root,'path',d=d,fill=color,id=name,**a)
bg,body,tail=svg(),svg(),svg()
rect(0,0,1280,1280,'#BCE8E4','Wall')
path(bg,'M251 133 L267 119 L267 168 L288 168 L288 1134 L974 1134 L958 1158 L270 1158 L270 1118 L245 1118 L245 1060 L267 1052 L267 216 L251 216Z','#73AAA1','Window cast shadow')
rect(288,205,686,929,'#F4EBDC','Window frame')
rect(305,205,33,848,'#EDE1CE','Left frame shading')
rect(335,205,3,848,'#C2B29F','Left frame edge')
rect(941,205,3,848,'#CBBFAE','Right frame edge')
rect(969,205,5,848,'#F7F7F6','Right frame highlight')
rect(369,243,544,546,'#4B6C72','Blinds recess')
rect(377,255,536,526,'#618A94','Blinds field')
for row in range(20):rect(377,256+27*row,536,10,'#8AA9B1',f'Blind slat {row+1:02}')
rect(369,782,544,7,'#F7F7F6','Inner window highlight')
rect(338,824,603,229,'#5F8892','Lower glass')
rect(338,824,603,14,'#4D6B70','Crossbar shadow')
rect(338,790,603,34,'#F4EBDC','Window crossbar')
rect(288,178,686,27,'#F2E7D7','Upper frame molding')
rect(288,201,686,5,'#BCAC9A','Upper molding shadow')
rect(267,119,746,49,'#F3E9DA','Top trim')
rect(267,119,746,8,'#F7F7F6','Top trim highlight')
rect(288,168,686,10,'#BCAC9A','Top trim shadow')
rect(288,1100,686,34,'#F3E9DA','Lower frame molding')
rect(288,1100,686,8,'#C2B29F','Lower molding shadow')
rect(267,1053,746,46,'#F3E9DA','Windowsill')
rect(267,1053,746,7,'#F7F7F6','Windowsill highlight')
rect(267,1098,746,9,'#BCAC9A','Windowsill shadow')
# Smooth plant shadows, stems and leaves at the original positions.
path(bg,'M856 1052 C842 1017 827 992 812 973 C787 949 774 945 775 925 C774 906 787 885 805 878 C801 863 798 850 792 848 C811 843 835 851 842 872 C851 888 854 918 858 944 C866 917 866 891 880 877 C895 868 906 878 906 895 C924 884 943 893 947 916 C950 931 945 946 939 956 C925 951 917 948 910 947 C905 970 885 978 883 995 L889 1052Z','#4D6B70','Plant cast shadow')
for i,d in enumerate(['M876 974 C865 934 850 894 834 867','M875 974 C888 937 890 910 890 887','M878 974 C901 945 932 919 950 904','M870 975 C850 950 828 924 815 918','M880 975 C898 966 918 965 933 978']):
 path(bg,d,'none',f'Plant stem {i+1}',stroke='#62754E',stroke_width=3,stroke_linecap='round')
leaves=[('M833 878 C814 880 806 866 802 852 C810 848 815 842 818 836 C840 831 864 842 869 856 C872 867 852 880 842 881 C838 881 835 880 833 878Z','#62754E','Upper leaf'),('M834 885 C811 876 789 892 785 920 C783 928 780 933 779 939 C795 932 819 929 830 918 C840 909 844 894 834 885Z','#62754E','Left rear leaf'),('M878 866 C888 856 902 859 905 869 C915 857 929 861 930 875 C932 896 913 912 903 928 C888 911 877 891 878 866Z','#819C5C','Heart leaf'),('M944 881 C962 876 979 894 986 919 C990 932 988 943 987 954 C974 944 955 940 943 930 C928 918 926 896 936 886 C938 883 941 882 944 881Z','#819C5C','Right leaf'),('M842 917 C859 915 869 928 861 943 C851 960 826 962 804 981 C799 960 803 939 819 925 C826 919 833 917 842 917Z','#819C5C','Front left leaf'),('M928 936 C943 931 956 944 959 958 C962 971 960 978 959 987 C941 979 924 970 916 957 C911 947 918 940 928 936Z','#718952','Front right leaf')]
for d,c,n in leaves:path(bg,d,c,n)
path(bg,'M825 1049 C825 1045 850 1043 879 1043 C909 1043 934 1045 934 1049 C934 1053 909 1055 879 1055 C850 1055 825 1053 825 1049Z','#4D6B70','Pot contact shadow',opacity='.18')
path(bg,'M827 988 L933 988 L921 1053 L839 1053Z','#CD755A','Plant pot')
path(bg,'M827 988 L840 988 L850 1053 L839 1053Z','#A65D45','Pot left shading')
path(bg,'M825 970 L932 970 L932 992 L825 992Z','#CD755A','Pot rim')
path(bg,'M825 970 L836 970 L833 992 L825 992Z','#A65D45','Pot rim side')
path(bg,'M836 992 L932 992 L931 997 L837 997Z','#A65D45','Pot rim shadow')
# Use only the cat from the supplied full-scene SVG. Window and plant above
# stay clean; the original cat contours and edge details are retained exactly.
from replace_scene import parse, clip, add as add_original
source=E.parse(ROOT/'assets/Scene-upload.svg').getroot()
cat_indices={1,8,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40}
for index,node in enumerate(source):
 if index not in cat_indices:continue
 contours=parse(node.get('d'))
 add_original(body,node,' '.join(clip(v,c,480,False) for v,c in contours),f'CatBody source {index:03}')
 add_original(tail,node,' '.join(clip(v,c,481,True) for v,c in contours),f'CatTail source {index:03}')
for name,root in [('Background',bg),('CatBody',body),('CatTail',tail)]:
 E.indent(root);E.ElementTree(root).write(ROOT/'assets'/f'{name}.svg',encoding='unicode')
poster=svg()
for name,root in [('Background',bg),('CatTail',tail),('CatBody',body)]:
 group=add(poster,'g',id=name);group.extend(list(root))
E.indent(poster);E.ElementTree(poster).write(ROOT/'poster.svg',encoding='unicode')
(ROOT/'rig.json').write_text(json.dumps({'rootY':1030,'source':'clean_scene.py'},indent=2)+'\n')
print('Clean window/plant + original uploaded cat; matching static poster')
