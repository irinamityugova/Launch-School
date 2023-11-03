/**
 * Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.
 *
 */

function sumIsInvalid(sides) {
  let invalid = sides.some((side, i) => {
    let otherSides = sides.filter((_, j) => i !== j );
    let sum = otherSides[0] + otherSides[1];
    if (sum <= side) return true;
  });

  return invalid;
}

function hasZeroSide(sides) {
  let zero = sides.some(side => side === 0);
  return zero;
}

function hasNegativeSide(sides) {
  return sides.some(side => side < 0);
}

function isEquilateral(sides) {
  return sides.every(side => side === sides[0]);
}

function isIsosceles(sides) {
  let isosceles = false;
  sides.forEach((side, i) => {
    // check the other two sides
    let otherSides = sides.filter((_, j) => i !== j );
    if(otherSides[0] === otherSides[1] && otherSides[0] !== side) {
      isosceles = true;
    }
  });
  return isosceles;
}

class Triangle {
  constructor(...sides) {
    if (sides.length < 3) throw Error;
    if (hasNegativeSide(sides)) throw Error;
    if (hasZeroSide(sides)) throw Error;
    if (sumIsInvalid(sides)) throw Error;

    if(isEquilateral(sides)) {
      this.type = 'equilateral';
    } else if (isIsosceles(sides)) {
      this.type = 'isosceles';
    } else {
      this.type = 'scalene';
    }
  }
  kind() {
    return this.type;
  }
}

module.exports = Triangle;