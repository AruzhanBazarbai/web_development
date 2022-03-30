def make_chocolate(small, big, goal):
    if (goal%5)<=small and (goal-(big*5))<=small: 
        if (goal-(big*5))>=0: return (goal-(big*5))
        else: return goal%5
    else: return -1