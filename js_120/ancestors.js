
// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names.

// Here's an example output:
// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function () {
  let anscestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(anscestor, 'name')) {
    console.log(anscestor)
    return [anscestor.name].concat(anscestor.ancestors());
  }

  return '[Object Prototype]';
};

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']