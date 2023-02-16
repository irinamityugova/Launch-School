let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");

const greet = function () {
  console.log(`Good Morning, ${name}!`);
}

greet(name);