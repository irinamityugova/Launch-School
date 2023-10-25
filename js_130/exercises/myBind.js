// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

// Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.

function myBind(func, context) {
  return function () {
    let args = Array(...arguments);
    return func.apply(context, args);
  };
}

let a = {
  a: 'a',
  f() {
    console.log(this.b);
  }
};

let b = {
  b: 'b'
};

let foo = myBind(a.f, b);
console.log(foo.call(a, 1, 2, 3));