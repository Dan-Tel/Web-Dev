def array_count9(nums):
  cnt = 0
  
  for n in nums:
    if n == 9:
      cnt += 1
  
  return cnt
