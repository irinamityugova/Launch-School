// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

function delegate(obj, func, ...args) {
  func.call(obj, ...args);
}

let a = {
  name: 'a',
  f: function(key) {
    console.log(this[key]);
  },
};

let b = {
  name: 'b',
};

delegate(b, a.f, 'name');