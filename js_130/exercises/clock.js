/*
Clock
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object. Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.

P
clock - 24 hours in a day, 60 mins in an hour hh:mm
independent of date - does not concern itself
add minutes
subtract minutes
time
clocks that represent the same time should be equal to each other

R
adding/subtracting manipulates both clocks of the same time -- false, they should become different objects if one is modified.
clock has 24 hours and 60 minutes
time is 'hh:mm'
clock is initiated at a certain time

E
let a = new Clock(0) -> 00:00
let b = new Clock(1) -> 01:00
let c = new Clock(-1) -> 23:00
let d = new Clock(-1) -> 23:00

c.addMinutes(100) -> c and d -> 00:40
a.subtractMinutes(5) -> 23:55

D
keep a collection of clocks in an object with keys like the time zone
{ collection }
clock is an object
- addMinutes
- subtractMinutes
- time property

A
If the Collection already has the current clock, point the variable to the same clock object.
Else create a new Clock in the Collection

New Clock has hours and minutes properties that get translated into hh:mm time property.

at(hrs, mins) method returns time.
toString method returns time
isEqual method compares this clock to another
add method adds minutes
subtract method subtracts minutes

Clocks of the same time are the same object.
*/

module.exports = class Clock {
  constructor(hrs, mins) {
    while(mins < 0) {
      hrs -= 1;
      mins += 60;
    }
    while(mins > 60) {
      hrs += 1;
      mins -= 60;
    }
    while (hrs < 0) {
      hrs += 24;
    }

    this.hours = hrs % 24;
    this.minutes = mins % 60;
    this.time = this.toString();

    if (Clock.collection[this.time]) {
      return Clock.collection[this.time];
    } else {
      Clock.collection[this.time] = this;
    }
  }

  static at(hrs = 0, mins = 0) {
    return new Clock(hrs, mins);
  }

  static collection = {};

  isEqual(clock) {
    return this === clock;
  }

  add(mins) {
    return new Clock(this.hours, this.minutes + mins);
  }

  subtract(mins) {
    return this.add(-1 * mins);
  }

  toString() {
    let hours = String(this.hours);
    let minutes = String(this.minutes);
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    return hours + ':' + minutes;
  }
};