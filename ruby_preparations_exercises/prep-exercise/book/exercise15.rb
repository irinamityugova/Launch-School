hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!" #both hashes contain the same key: value pairs. order does not affect their equality
else
  puts "These hashes are not the same!"
end