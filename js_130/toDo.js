// In this problem, we'll build a simple todo list program that uses the techniques we've seen in this assignment.

// Write a makeList function that creates and returns a new function that implements a todo list. The returned function should have the following behavior:

// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it prints all of the items on the list. If the list is empty, it prints an appropriate message.

function List() {
  this.items = [];
  this.list();
}

List.prototype = {

  list() {
    if (this.items.length === 0) {
      console.log("The list is empty.");
    } else {
      this.items.forEach(e => console.log(e));
    }
  },

  add(item) {
    if(this.items.includes(item)) {
      console.log(`"${item}" is already in the list.`);
      return null;
    }
    console.log(`"${item}" added.`);
    this.items.push(item);
  },

  remove(item) {
    console.log(`"${item}" removed.`);
    this.items.splice(this.items.indexOf(item), 1);
  }
};

let list = new List();
// The list is empty.
console.log();

list.add("make breakfast");
// make breakfast added!
console.log();

list.add("read book");
// read book added!
console.log();

list.list();
// make breakfast
// read book
console.log();

list.remove("make breakfast");
// make breakfast removed!
console.log();
list.list();
// read book