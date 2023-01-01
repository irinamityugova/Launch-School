
# Use the loop iterator to print out the string "Ruby!" 30 times.


count = 0
loop do
  count += 1
  print "Ruby!"
  break if count == 30
end

30.times { print "Ruby!"}

# add 10 to each item in the array and print the result
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  print "#{x}"
end

=begin
# Alternative syntax for .each method:
object.each { |item|
  # Do something
}
=end