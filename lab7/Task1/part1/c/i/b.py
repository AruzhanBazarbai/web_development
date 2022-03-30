a=int(input())
b=int(input())
c=int(input())
d=int(input())
x=a
while x<=b:
    if x%d==c:
        print(x,end=" ")
    x+=1