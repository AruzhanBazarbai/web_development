if __name__ == '__main__':
    res={}
    r=[]
    min=1e9
    temp=0
    third_mini=1e9
    for _ in range(int(input())):
        name = input()
        score = float(input())
        res[name]=score
        if score<min:
            min=score
    for y in res.values():
        if y>min and y<third_mini:
            third_mini=y
    for x,y in res.items():
        if y==third_mini:
            r.append(x)
    r.sort()
    for x in r:
        print(x)
   