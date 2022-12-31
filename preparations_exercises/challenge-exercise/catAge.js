function catAge (catAge) {
  switch (catAge) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (catAge - 2) * 4;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
console.log(catAge(4)); // 32