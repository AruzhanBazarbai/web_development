def end_other(a, b):
    a = a.lower()
    b = b.lower()
    k = False
    
    if(len(a) >= len(b)):
        for i in range(len(b)):
            if b[len(b)-1-i] == a[len(a)-1-i]: k = True
            else:
                k = False
                break
    else:
        for i in range(len(a)):
            if b[len(b)-1-i] == a[len(a)-1-i]: k = True
            else: 
                k = False
                break
    
    return k