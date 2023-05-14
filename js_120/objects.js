
/*
Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing.
P
In: object, given property, new value
Out: sideffect - assigns a new value to the given property in a prototype chain.

searches the prototype chain

*/

// function assignProperty(obj, prop, val) {
//   let proto = obj;

//   while(proto.hasOwnProperty(prop) === false) {
//     proto = Object.getPrototypeOf(proto);
//     if (proto === null) return null;
//   }

//   proto[prop] = val;
// }

// let fooA = { bar: 1 };
// console.log(Object.getPrototypeOf(fooA))
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// // assignProperty(fooC, "bar", 2);
// // console.log(fooA.bar); // 2
// // console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// let obj = {
//   hello() {
//     console.log(this);
//     return 'hi';
//   },
// };

// let bar = obj.hello;
// console.log(bar);

// function foo() {
//   console.log("this refers to: " + this);
// }

// foo(); // this refers to: undefined

// function func() {
//   return this;
// }

// let context = func();

// console.log(context);

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

let output = bar.add.call(foo);
console.log(output);