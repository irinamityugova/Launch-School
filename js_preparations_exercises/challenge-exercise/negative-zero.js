function isNegativeZero(value) {
  return 1 / value === -Infinity;
}
console.log("isNegativeZero(-0),", isNegativeZero(-0))