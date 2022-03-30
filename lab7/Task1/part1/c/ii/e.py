def f(a):
    cnt=0
    x=1
    while x<a:
        if x*2>=a:
            cnt+=1
            break
        x*=2
        cnt+=1
    return cnt

a=int(input())
print(f(a))
        