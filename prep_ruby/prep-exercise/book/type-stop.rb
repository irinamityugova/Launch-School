def stop_loop(input)
  while !input.match(/stop*/i) do
    puts "Hi, How are you feeling?"
    gets.chomp
    puts "Want me to ask you again?"
    input = gets.chomp
  end
end

stop_loop("")