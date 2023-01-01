print "Thtring, pleathe!: "
user_input = gets.chomp
if user_input.length == 0
  print "Thtring, pleathe dummy!: "
  user_input = gets.chomp
end
user_input.downcase!

if user_input.include? "s"
  user_input.gsub!(/[zs]/, "th")
elsif user_input.include? "ce"
user_input.gsub!(/c/, "th")
else
  puts "Nothing to do here!"
end

puts "Your string is: #{user_input}"