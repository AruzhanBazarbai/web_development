a=int(input())
cnt=1
for i in range(1,a//2+1):
    if a%i==0:
        # print(i,end=" ")
        cnt+=1
print(cnt)

