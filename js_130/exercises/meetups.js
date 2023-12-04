/*
Meetups

Meetups are a great way to meet people who share a common interest. Typically, meetups happen monthly on the same day of the week.

In this program, we'll construct objects that represent a meetup date. Each object takes a month number (1-12) and a year (e.g., 2021). Your object should be able to determine the exact date of the meeting in the specified month and year. For instance, if you ask for the 2nd Wednesday of May 2021, the object should be able to determine that the meetup for that month will occur on the 12th of May, 2021.

The descriptors that may be given are strings: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'. The case of the strings is not important; that is, 'first' and 'fIrSt' are equivalent. Note that "teenth" is a made up word. There was a meetup whose members realised that there are exactly 7 days that end in '-teenth'. Therefore, it's guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is the "teenth" of that day in every month. That is, every month has exactly one "teenth" Monday, one "teenth" Tuesday, etc. The fifth day of the month may not happen every month, but some meetup groups like that irregularity.

The days of the week are given by the strings 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'. Again, the case of the strings is not important.

P
Meetup(year, month) => meetup object
meetup.day(day, nth) => Date

R
Meetup date will vary depending on
1. the day of the week
2. days in the month
3. leap year

"teenth" is a weekDay that falls on 13-19
I'm allowed to use the Date built in object

Q
What's the connection between days and dates?

  The date object can specify days
    Sunday - Saturday : 0 - 6

  The Date object can specify date
    new Date(year, month, date)
    If you set the date (day-of-month) to zero, you get the last day of the previous month.
      Ex: console.log(new Date(2021, 2, 0).getDate());
      Expect: 31 (there are 31 days in December 2023)

E
The first Monday of January 2021
// January 4, 2021

The third Tuesday of December 2020
// December 15, 2020

The teenth Wednesday of December 2020
// December 13, 2020

The last Thursday of January 2021
// January 28, 2021

D
Meetup object
Range as an array? no. start, end

A
Meetup class,
  Set this year, month, and lastDate
  Add a day prototype method

.day method (nth, day) => Date
  set this day
  if nth is last,
    set range to dates after lastDate-7 to last date
    return matching date (matchDate)
  else if nth is teenth,
    set range to dates between 13 and 19,
    return matching date (matchDate)
  otherwise,
    convert nth to a number
    return matching date (matchDate(7 * (nth - 1), 7 * nth))
  Return the date

C
matchDate(range = [this.lastDate - 7, this.lastDate])
  // if the range exceeds the lastDate
  if (range[0] > this.lastDate) {
    console.log("This range, ${range.join('-')}, had no match");
    break;
  }
  for numbers between the range,
    if the day of the date matches meetup.day
      return new Date(meetup.year, meetup.month, date)
  console.log("This range, ${range.join('-')}, had no match")
*/

module.exports = class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.lastDate = new Date(year, month, 0).getDate();
  }

  day(day, nth) {
    nth = nth.toLowerCase();
    this.day = day.toLowerCase();
    let range = [1, 7];
    if (nth === 'first') {
      return this.matchingDate(range);
    } else if (nth === 'last'){
      range = [this.lastDate - 6, this.lastDate];
    } else if (nth === 'teenth') {
      range = [13, 19];
    } else {
      let table = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth',
        5: 'fifth',
      };
      Object.keys(table).forEach((num) => {
        if (table[num] === nth) range = [1 + 7 * (num - 1), 7 * num];
      });
    }
    if (range[1] > this.lastDate) range[1] = this.lastDate;
    return this.matchingDate(range);
  }

  matchingDate(range) {
    let table = {
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3,
      'thursday': 4,
      'friday': 5,
      'saturday': 6,
      'sunday': 0,
    };
    for (let num = range[0]; num <= range[1]; num++) {
      let date = new Date(this.year, this.month, num);
      if(date.getDay() === table[this.day]) return date;
    }
    console.log(`This range, ${range.join('-')}, had no match`);
    return null;
  }
};