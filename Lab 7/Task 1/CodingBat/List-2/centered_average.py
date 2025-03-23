def centered_average(nums):
  sum = -max(nums) - min(nums)
  
  for n in nums:
    sum += n
  
  return sum / (len(nums) - 2)