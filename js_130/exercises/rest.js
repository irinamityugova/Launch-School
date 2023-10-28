function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

let out = sum(1, 4, 5, 6); // 16
console.log(out);