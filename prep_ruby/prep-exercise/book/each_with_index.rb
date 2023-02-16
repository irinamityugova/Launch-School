hash = Hash.new
%w(cat dog wombat).each_with_index { |item, index|
  puts "hash[#{index}] = #{item}"
  hash[item] = index
}