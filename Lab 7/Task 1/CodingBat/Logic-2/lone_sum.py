def lone_sum(a, b, c):
  if a != b and b != c and a != c:
    return a + b + c
  if a == b and b != c:
    return c
  if a == c and b != c:
    return b
  if b == c and a != b:
    return a
  return 0