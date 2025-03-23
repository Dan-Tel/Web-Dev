def lucky_sum(a, b, c):
  sum = 0
  v = [a, b, c]
  
  for i in range(3):
    if v[i] == 13:
      break
    sum += v[i]
  
  return sum
