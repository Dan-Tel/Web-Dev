from math import *

a = int(input())
b = int(input())

for i in range(a, b + 1):
  if i == pow(floor(sqrt(i)), 2):
    print(i)
