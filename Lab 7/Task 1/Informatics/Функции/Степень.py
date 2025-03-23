def power(a, n):
  return a ** n

a, n = list(map(float, input().split(" ")))
print(power(a, n))
