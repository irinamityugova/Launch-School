/**
 * Cute Angles
 *
 * Write a function that takes a floating point number representing an angle
 * between 0 and 360 degrees and returns a string representing that angle in
 * degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
 * degrees, a single quote (') to represent minutes, and a double quote (") to
 * represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
 *
 *
 * Ex: dms(76.73);        // 76°43'48"
 * Ex: dms(30);           // 30°00'00"
 *
 * function dms(float: Number) => String
 *
 * Algorithm:
 * Floor the float to get degrees
 * Subtract it from float to get percent of minutes
 * Multiply percent by 60 to get time
 * Floor time to get minutes
 * Subtract minutes from time to get percent of seconds
 * Multiply percent of seconds by 60 to get seconds, floor it
 * Connect degrees, minutes and seconds into a string and return it
 */

function dms(float) {
  const MIN_IN_DEGREE = 60;
  const SEC_IN_MIN = 60;
  const degCode = '\u00B0';

  const deg = Math.floor(float);
  const percentMins = float - deg;
  const time = percentMins * MIN_IN_DEGREE;
  const mins = Math.floor(time);

  const percentSec = time - mins;
  const sec = Math.floor(percentSec * SEC_IN_MIN);

  return `${deg}${degCode}${mins}'${sec}"`;
}

const output = dms(76.73);
console.log(output);