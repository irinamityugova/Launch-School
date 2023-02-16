def to_zero(num)
  return 0 if num <= 0
  puts num-1
  return to_zero(num-1)
end

puts "Countdown from what number?"

to_zero(gets.chomp.to_i)