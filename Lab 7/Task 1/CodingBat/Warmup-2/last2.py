def last2(str):
  last = str[-2:]
  cnt = 0
  
  for i in range(len(str) - 2):
    if str[i:i + 2] == last:
      cnt += 1
  
  return cnt
