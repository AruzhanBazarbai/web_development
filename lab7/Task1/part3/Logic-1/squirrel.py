def squirrel_play(temp, is_summer):
    if is_summer:
        if temp<=100 and temp>=60: return True
        else: return False
    else:
        if temp<=90 and temp>=60: return True
        else: return False