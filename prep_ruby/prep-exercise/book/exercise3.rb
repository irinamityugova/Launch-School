arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.each { |e| p e if e > 5 }

p newArr = arr.select { |e| e % 2 != 0 }