def min(a, b, c, d):
  if a <= b and a <= c and a <= d:
    return a

  if b <= a and b <= c and b <= d:
    return b
  
  if c <= a and c <= b and c <= d:
    return c
  
  if d <= a and d <= b and d <= c:
    return d

A = list(map(int, input().split(" ")))

print(min(A[0], A[1], A[2], A[3]))
