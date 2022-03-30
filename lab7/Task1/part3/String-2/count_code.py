def count_code(str):
    x = -1
    cnt=0
    y = str.count('co')
    for i in range(y):
        x = str.find('co', x+1)
        if (x+3 <= len(str)-1): 
            if str[x+3] == 'e': cnt+=1
    return cnt