// Return a number of the array that appears an odd number of times

function findOdd(A) {

  const count = {}; //counter object
  const result = [];

  A.forEach(num => {
    if (!count[num]) count[num] = 0; //key initiator
    count[num] += 1;
  });

  for ( let key in count) {
    if (count[key] % 2 !== 0) result.push(Number(key))
  }

  console.log(result)
  return result;

}

findOdd([1, 3, 4, 5, 5, 5, 6, 6, 1, 3])