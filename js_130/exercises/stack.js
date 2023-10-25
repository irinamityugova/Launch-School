// Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was least recently added to the stack and ending with the most recently added item that is still on the stack.

// Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.

class Stack {
  constructor() {
    let stack = [];

    this.constructor.prototype.push = function(e) {
      return stack.push(e);
    };

    this.constructor.prototype.pop = function() {
      return stack.pop();
    };

    this.constructor.prototype.print = function() {
      stack.forEach(e => console.log(e));
    };
  }
}

let stack = new Stack;
console.log(stack.stack);
stack.push(1);
stack.push(2);
stack.print();
stack.pop();