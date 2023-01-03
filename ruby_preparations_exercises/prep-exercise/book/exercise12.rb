contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

contact_data.each do |db|

  contacts.each do |person, data|
    data[:email] = db[0]
    data[:address] = db[1]
    data[:phone] = db[2]
  end

end

p "Joe's email is #{contacts["Joe Smith"][:email]} and Sally's phone number is #{contacts["Sally Johnson"][:phone]}"