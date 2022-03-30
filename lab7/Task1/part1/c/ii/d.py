def f(a):
    if a%2!=0:
        return False
    else:
        while a>0:
            if a%2==0 and a!=0:
                a/=2
                if a==1:
                    return True
            else:
                return False
        return True
a=int(input())
if f(a) or a==1:
    print("YES")
else:
    print("NO")
        