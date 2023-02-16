// Capitalize each distinct character in a string, however, only its second to last occurence.
// # If the character occurs only once in a string, leave it unchanged.

// # p funny_string("") == "" # true
// # p funny_string("aa") == "Aa" # true
// # p funny_string("launchschool") == "LaunCHschOol" # true
// # p funny_string("assessments") == "assEsSments" # true

// #

// # Input: String

// # Output: String

// # Explicit:
// # - Cap each distinct char, 2nd to last occurrance
// # - If it occurs only once, leave unchanged.


function capitalize (string) {
  const arr = string.split("");

  for (let i = string.length-1; i > 0 ; i--) {
    let index = string.lastIndexOf(
      string[i],
      string.lastIndexOf(string[i])-1) //lastIndexOf(string, startIndex)
    if (index !== -1) {
      arr[index] = string[index].toUpperCase()
    }
  }

  return arr.join("")
  }

console.log(capitalize("assessments"))