=begin

split(pattern=nil, [limit]) → an_array
split(pattern=nil, [limit]) {|sub| block } → str
Divides str into substrings based on a delimiter,
returning an array of these substrings.

If pattern is a String, then its contents are used as the
delimiter when splitting str. If pattern is a single space,
str is split on whitespace, with leading and trailing whitespace
and runs of contiguous whitespace characters ignored.

If pattern is a Regexp, str is divided where the pattern matches.
Whenever the pattern matches a zero-length string, str is split
into individual characters. If pattern contains groups,
the respective matches will be returned in the array as well.

If pattern is nil, the value of $; is used. If $; is nil (which is the default),
str is split on whitespace as if ‘ ’ were specified.

If the limit parameter is omitted, trailing null fields are suppressed.
If limit is a positive number, at most that number of split substrings will
be returned (captured groups will be returned as well, but are not counted towards the limit).
If limit is 1, the entire string is returned as the only entry in an array.
If negative, there is no limit to the number of fields returned,
and trailing null fields are not suppressed.

When the input str is empty an empty Array is returned as the string
is considered to have no fields to split.

Doc https://ruby-doc.org/2.7.7/String.html#method-i-split

=end

" now's  the time ".split       #=> ["now's", "the", "time"]
" now's  the time ".split(' ')  #=> ["now's", "the", "time"]
" now's  the time".split(/ /)   #=> ["", "now's", "", "the", "time"]
"1, 2.34,56, 7".split(%r{,\s*}) #=> ["1", "2.34", "56", "7"]
"hello".split(//)               #=> ["h", "e", "l", "l", "o"]
"hello".split(//, 3)            #=> ["h", "e", "llo"]
"hi mom".split(%r{\s*})         #=> ["h", "i", "m", "o", "m"]

"mellow yellow".split("ello")   #=> ["m", "w y", "w"]
"1,2,,3,4,,".split(',')         #=> ["1", "2", "", "3", "4"]
"1,2,,3,4,,".split(',', 4)      #=> ["1", "2", "", "3,4,,"]
"1,2,,3,4,,".split(',', -4)     #=> ["1", "2", "", "3", "4", "", ""]

"1:2:3".split(/(:)()()/, 2)     #=> ["1", ":", "", "", "2:3"]

"".split(',', -1)               #=> []