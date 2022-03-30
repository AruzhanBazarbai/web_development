def xyz_there(str):
    y = str.count('xyz')
    x = -1
    k = False
    if y>0:
        for i in range(y):
            x = str.find('xyz', x+1)
            if x==0: return True
            elif x>0 and str[x-1]!='.': return True
            else: k = False
    else: k = False
    return k