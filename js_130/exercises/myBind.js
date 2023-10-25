// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(func, context) {
  return function () {
    return func.apply(context);
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
console.log(foo.call(a));