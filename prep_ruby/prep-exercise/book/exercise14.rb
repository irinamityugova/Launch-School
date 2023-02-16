# turn it into a new array that consists of strings containing one word

a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

p a.map { |str| str = str.split(" ")[0] }