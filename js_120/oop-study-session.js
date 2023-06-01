/*
Create an OOP skeletal design based on these requirements. You can use any object creation pattern. Think carefully about the relationships being created between the types and try to aim for the least amount of repetition possible. There are several correct answers.

We have a role-playing game that features several enemies that are  mythical creatures or some other type:

- We have Horses that can gallop.
    - A Pegasus is a type of Horse that can gallop and fly.
    - A Unicorn is a type of Horse that can gallop, and pierce.
        - Unicorns are known to be very rare. We should have a method defined somewhere in our code that lets us know how many unicorns have ever been created.

- We have Humans that can speak.
    - A Thief is a type of Human that can steal.
    - A Pirate is a type of Thief that can steal and sail.
- A Wizard is a type of Human that can cast spells.

- A Centaur is a creature that has a torso of a man, and the legs of a horse. They can speak and gallop. They also have the ability to slash with their swords.

*/

// Starting call soon...
// Sorry finishing up dinner - will

/*
- Topics:
  - 



  Questions
  - OLOO - no way to use static properties, right? Is there some alternative? Or just global constants?
  - When using classes / pseudo-classical, is it good to store global constants / magic numbers relevant to that class as static properties?
*/

/*
  - what's the difference between static methods and instance methods? 
    - how are they implemented differently or similarly in Classes / pseudo-classical object creation?
    - provide an example of each
    (also invoke them)
    
*/

// class Device {
//   static thing = 'This thing';
//   static logthing() {
//     console.log(this.thing);
//   }
// }

// function Device2() {
  
// }


// Device2.thing = 'this thing';
// Device2.logThing = function() {
//   console.log(this.thing);
// }


// Device.thing()

/*
static methods:
- provide information about the "type"/"class" - not an instance
- we don't want to copy it onto every object
- want to access the static method from basically anywhere, not limited to instance method calls

conclusion:
  - there's no difference in implementation in instance and static methods for OLOO, but contextually they're different
  - ideally: call static methods / use static props from the prototype, not from the inheriting instances
*/

// Array.isArray([]);
// Array.isArray({});

// class Board {
//   constructor() {
//     this.squares = new Array(9).fill(Board.marks.initial);
//   }
//   static positions = ['Top Left', 'Top Center', 'Top Right',
//   'Middle Left', 'Middle Center', 'Middle Right',
//   'Bottom Left', 'Bottom Center', 'Bottom Right'];
//   static marks = {initial : ' ', player1 : 'X', player2 : 'O'};
//   static winningIndices = [
//     [0, 1, 2], //top row
//     [3, 4, 5], //middle row
//     [6, 7, 8], //bottom row
//     [0, 4, 8], //top left to bottom right diagonal
//     [2, 4, 6], //top right to bottom left diagonal
//     [0, 3, 6], //left column
//     [1, 4, 7], //middle column
//     [2, 5, 8]  //right column
//   ];
//   threeInARow(playerMark) {
//     return Board.winningIndices.some(subArr => subArr.every(square => this.squares[square] === playerMark));
//   }
//   isFull() {
//     return this.squares.every(square => square !== Board.marks.initial);
//   }
//   //returns an array of available and TAKEN board positions on the calling board.
//   getAvailablePositions() {
//     return Board.positions.slice().map((position, idx) => {
//       if(this.getAvailableSquareIndicies().includes(idx)) return position;
//       else return 'TAKEN';
//     });
//   }
//   //returns an array of the current available squares indicies on the calling board
//   getAvailableSquareIndicies() {
//     return this.squares.map((element,idx) => element === Board.marks.initial ? idx : null)
//                       .filter(element => element !== null);
//   }
//   //places a player's mark in the squares array of the calling board.
//   placeMark(chosenSquare, playerMark) {
//     this.squares[chosenSquare] = playerMark;
//   }
// }



// let devicePrototype = {
//   IDENTITY: "An electronic device",
//   returnIdentity() {
//     console.log(devicePrototype.IDENTITY);
//   },

//   init(type, manufacturer, batteryLevel) {
//     this.type = type;
//     this.manufacturer = manufacturer;
//     this.batteryLevel = batteryLevel;
//     return this;
//   },

//   getType() {
//     return this.type;
//   }

//   logInfo() {
//     console.log(`This ${this.manufacturer} ${this.type} has ${this.batteryLevel}% battery remaining.`);
//   },
// };

// let device1 = Object.create(devicePrototype).init('computer', 'apple', 100);
// let device2 = Object.create(devicePrototype).init('smartphone', 'samsung', 80);

// console.log(device2.IDENTITY);
// console.log(devicePrototype.IDENTITY);

// console.log(device2.getType());
// console.log(device2.type);


// let devicePrototype = {
//   static: 'This is static',

//   prototypeTest: {
//     init(type, manufacturer, batteryLevel) {
//       this.type = type;
//       this.manufacturer = manufacturer;
//       this.batteryLevel = batteryLevel;
//       return this;
//     },
//     logInfo() {
//       console.log(`This ${this.manufacturer} ${this.type} has ${this.batteryLevel}% battery remaining.`);
//     }
//   }
// };

// let device1 = Object.create(devicePrototype.prototypeTest).init('computer', 'apple', 100);
// let device2 = Object.create(devicePrototype.prototypeTest).init('smartphone', 'samsung', 80);
// let device3 = Object.create(devicePrototype).init('smartwatch', 'apple', 25);

// device1.logInfo();
// // device2.logInfo();
// // device3.logInfo();
// console.log('static', device1.static);
// console.log('static', devicePrototype.static);

// console.log(device1.hasOwnProperty('logInfo')); // false
// console.log(device1.constructor.name); 
/* logs 'Object' - No classes or 'types' formally
at play in OLOO, though inheritance and the prototype chain are more visible than ever.


/**
 * device1 does not have it's `own` property of 'logInfo', however when you try to 
 * access the property and none is found, javascript then looks at device1's prototype
 * object, referenced by `Device.prorotype` and DOES find that it has a `logInfo` method
 * and invokes that method, with the current object `device1` as the implicit execution
 * context, binding `this` within the method, to the `device1` object and allowing it to 
 * access it's proprty values. 
 */