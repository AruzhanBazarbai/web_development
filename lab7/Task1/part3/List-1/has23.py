def has23(nums):
    k=False
    for x in nums:
        if x==2 or x==3:
            k=True
            break
    return k
