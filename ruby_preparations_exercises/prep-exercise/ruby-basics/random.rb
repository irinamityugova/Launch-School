names = ['Dave', 'Sally', 'George', 'Jessica']
activities = ['walking', 'running', 'cycling']

def random(arr)
  return arr.sample
end

def sentence(name, activity)
  name.capitalize+" is "+activity.downcase+" today!"
end

puts sentence(random(names), random(activities)) # George went walking today!