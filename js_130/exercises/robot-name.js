/*
# Robot Name
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice.

P
Factory class
  Keep track of active robots

Robot class
Constructor
  Reject the same name if factory instance has it
  Generates random name

Reset method
  delete this Robot in the Factory
  new Robot()
*/
Math.seedrandom = require('seedrandom');

const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
const DIFFERENT_ROBOT_NAME_SEED = 1234;
const SAME_INITIAL_ROBOT_NAME_SEED = 1000;
Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

class Factory {
  constructor(type) {
    this.type = type;
    this.robots = [];
  }

  generateName() {
    function getDigit() {
      return Math.floor(Math.random()*10);
    }

    function getLetter() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    let name = getLetter() + getLetter() + getDigit() + getDigit() + getDigit();

    if (this.robots.includes(name)) {
      console.log('Generated existing name. Regenerating...');
      return this.generateName();
    }

    return name;
  }
}

let robotFactory = new Factory('robots');

module.exports = class Robot {
// class Robot {
  constructor() {
      let factoryName = robotFactory.generateName();
      console.log(factoryName);
      robotFactory.robots.push(factoryName);

      this.name = function() {
        return factoryName; // pointer to the duplicate variable
      };

      this.constructor.prototype.reset = function() {
        let previousName = factoryName;
        factoryName = robotFactory.generateName();
        robotFactory.robots.splice(robotFactory.robots.indexOf(previousName), 1, factoryName);
      };
  }
};
