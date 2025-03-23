def make_chocolate(small, big, goal):
  goal -= min(big, (goal // 5)) * 5
  
  return goal if goal <= small else -1
