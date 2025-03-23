def sum67(nums):
  sum = 0
  flag = False
  
  for n in nums:
    if n == 6:
      flag = True
    
    if n == 7 and flag:
      flag = False
      continue
    
    if not flag:
      sum += n
  
  return sum
