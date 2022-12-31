function catAge (catAge) {
  let humanAge = 0;

  for (let i = 0; i <= catAge; i++) {
    switch (i) {
      case 0:
        humanAge+=0;
        continue;
      case 1:
        humanAge+=15;
        continue;
      case 2:
        humanAge+=9;
        continue;
      default:
        humanAge+=4;
    }
  }
  console.log(humanAge)
  return humanAge;
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32