/*
Custom Set
Create a custom set type.

Sometimes it is necessary to define a custom data structure of some type, like a set. In this exercise you will define your own set type. How it works internally doesn't matter, as long as it behaves like a set of unique elements that can be manipulated in several well defined ways.

In some languages, including Ruby and JavaScript, there is a built-in Set type. For this problem, you're expected to implement your own custom set type. Once you've reached a solution, feel free to play around with using the built-in implementation of Set.

For simplicity, you may assume that all elements of a set must be numbers.

P
custom data structure
some type
Q: What's a set?
set - unique elements that can be manipulated in several well defined ways
([...elements]) => CustomSet => {}

R
elements are numbers
[] or no arguments makes an empty set

D
Class CustomSet
Methods
.isEmpty() => Boolean

.contains(num) => Boolean

.isSubset(new CustomSet()) => Boolean
a caller set is a subset if all of its elements are contained in the argument set

.isDisjoint(new CustomSet([]))
sets are disjoint if they share no elements

.isSame(new CustomSet())
sets with the same elements are equal

.add(num)
unique elements can be added to a set
adding an existing element does not change the set

.intersection(new CustomSet())
returns a set of all shared elements
intersection of an empty set and non-empty set is an empty set
intersection of two sets with no shared elements is an empty set

.difference(new CustomSet())
a set of all elements that are only in the first set
difference of a non-empty set and an empty set is the non-empty set

.union(new CustomSet())
returns a set of all elements in either set
union of an empty set and non-empty set is the non-empty set
union of non-empty sets contains all unique elements
*/

module.exports = class CustomSet {
  constructor(elements = []) {
    this.elements = elements;
    this.length = elements.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  contains(num) {
    return this.elements.includes(num);
  }

  isSubset(argSet) {
    let valid = true;
    this.elements.forEach(num => {
      if(!argSet.contains(num)) valid = false;
    });
    return valid;
  }

  isDisjoint(argSet) {
    if (argSet.length === 0 || this.length === 0) {
      return true;
    }

    let short;
    let long;

    if (argSet.length < this.length) {
      short = argSet;
      long = this;
    } else {
      short = this;
      long = argSet;
    }

    for (let i = 0; i < short.length; i++) {
      let num = short.elements[i];
      if (long.contains(num)) return false;
    }

    return true;
  }

  isSame(argSet) {
    if (this.length !== argSet.length) return false;

    for (let i = 0; i < this.length; i++) {
      let num = this.elements[i];
      if(!argSet.contains(num)) return false;
    }
    return true;
  }

  add(num) {
    if (!this.contains(num)) {
      this.elements.push(num);
      this.length += 1;
    }
    return this;
  }

  intersection(argSet) {
    let nums = [];
    let short;
    let long;

    if (argSet.length < this.length) {
      short = argSet;
      long = this;
    } else {
      short = this;
      long = argSet;
    }

    for (let i = 0; i < short.length; i++) {
      let num = short.elements[i];
      if (long.contains(num)) nums.push(num);
    }

    return new CustomSet(nums);
  }

  difference(argSet) {
    let nums = [];
    if (argSet.length === 0 || this.length === 0) return this;

    for (let i = 0; i < this.length; i++) {
      let num = this.elements[i];
      if (!argSet.contains(num)) nums.push(num);
    }
    return new CustomSet(nums);
  }

  union(argSet) {
    let nums = [...this.elements, ...argSet.elements];
    let newSet = new CustomSet();
    nums.forEach(num => newSet.add(num));
    return newSet;
  }
}