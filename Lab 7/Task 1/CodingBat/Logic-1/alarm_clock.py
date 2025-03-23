def alarm_clock(day, vacation):
  if vacation:
    if day == 6 or day == 0:
      return "off"
    return "10:00"
  
  if day == 6 or day == 0:
    return "10:00"
  return "7:00"
