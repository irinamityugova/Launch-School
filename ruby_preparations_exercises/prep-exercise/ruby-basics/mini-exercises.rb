array1 = [1, 5, 9]
array2 = [1, 5, 9]

p array1 == array2

numbers = {
  high:   100,
  medium: 50,
  low:    10
}

p half_numbers = numbers.map { |key, num| num / 2 }
p low_numbers = numbers.select! { |key, num| num < 25 } # ! is destructive
p numbers