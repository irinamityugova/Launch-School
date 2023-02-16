=begin

insert(index, obj...) → aryclick to toggle source
Inserts the given values before the element with the given index.

Negative indices count backwards from the end of the array, where -1 is the last element.
If a negative index is used, the given values will be inserted after that element, so using
an index of -1 will insert the values at the end of the array.

More at https://ruby-doc.org/2.7.7/Array.html

=end

a = %w{ a b c d }
a.insert(2, 99)         #=> ["a", "b", 99, "c", "d"]
a.insert(-2, 1, 2, 3)   #=> ["a", "b", 99, "c", 1, 2, 3, "d"]