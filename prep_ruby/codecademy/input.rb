print "What's your first name? "
first_name = gets.chomp
first_name.capitalize! # ! modifies the value contained within the variable

print "What's your last name? "
last_name = gets.chomp
last_name.capitalize!

print "What's your city? "
city  = gets.chomp
city.capitalize!

print "What's your state (abbreviation)? "
state = gets.chomp
state.upcase!

puts "#{first_name} #{last_name} is from #{city}, #{state}!"