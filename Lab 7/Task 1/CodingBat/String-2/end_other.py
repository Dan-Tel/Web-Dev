def end_other(a, b):
  return a[-len(b):].lower() == b.lower() or b[-len(a):].lower() == a.lower()
