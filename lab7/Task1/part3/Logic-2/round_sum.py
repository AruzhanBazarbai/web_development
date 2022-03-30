def round_sum(a, b, c):
    a = round10(a)
    b = round10(b)
    c = round10(c)
    return a+b+c

def round10(a):
  if a%10>=5: a = a+(10-a%10)
  if a%10<5: a = a - (a%10)
  return a