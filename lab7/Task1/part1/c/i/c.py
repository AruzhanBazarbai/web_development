import math
a=int(input())
b=int(input())
x=a
while x<=b:
    c=int(math.sqrt(x))
    # print(c)
    if c*c==x:
        print(x,end=" ")
    x+=1