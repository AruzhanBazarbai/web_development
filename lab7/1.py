def f_odd(s,res,i):
    if i==len(s):
        return res
    if i>=len(s)//2:
        res+=s[i]+')'
        
    else:
        res+=s[i]+'('
    return f_odd(s,res,i+1)

def f_even(s,res,i):
    if i==len(s):
        return res
    if i==(len(s)//2-1):
        res+=s[i]
        
    elif i>=(len(s)//2):
        res+=s[i]+')'
    else:
        res+=s[i]+'('
    return f_even(s,res,i+1)

s=input()
if len(s)%2==0:
    res=f_even(s,"",0)
    # print(res)
    print(res[:len(res)-1])
else:
    res=f_odd(s,"",0)
    # print(res)
    print(res[:len(res)-1])