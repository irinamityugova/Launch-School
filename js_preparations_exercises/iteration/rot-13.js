function rot13(message){
  //your code here
  const arr = message.split("")


  for (let i = 0; i < arr.length; i++) {

  let count = 13;

   /*
    * Charcodes from https://www.asciitable.com/
    *
    * 65-90 A-Z > using 77 for += 13 cushion
    * 97-122 a-z > using 109 for += 13 cushion
    *
    */

    let minLoCase = 97;
    let maxLoCase = 122;

    let minUpCase = 65;
    let maxUpCase = 90;

    let code = arr[i].charCodeAt(arr[i].length - 1)

    if (code >= minLoCase &&
        code <= maxLoCase &&
        code + count > maxLoCase ) { //lowercase char out of bounds

          count = (code + count)-maxLoCase-1; //find leftovers of count
          code = minLoCase + count; //find the new code

    } else if (
        code >= minUpCase &&
        code <= maxUpCase &&
        code + count > maxUpCase) {

          count = (code + count)-maxUpCase-1; //find leftovers count
          code = minUpCase + count; //find the new code

    } else if (code >= minUpCase &&
        code <= maxUpCase ||
        code >= minLoCase &&
        code <= maxLoCase) { //if it is an upper or lower case character

          code += count;
    }

    let letter = String.fromCharCode(code);
    arr[i] = letter

  }

  return arr.join("")
}


console.log(rot13("test - test"))