def find_values(a, b, c):
    if a >= b and a >=c: 
        max_val = a 
    elif b >= a and b >= c:
        max_val = b
    else:
        max_val = c

    if a <= b and a <= c:
        min_val = a 
    elif b <= a and b >= 