/**
 * Write a function that will take a short line of text, and
 * write it to the console log within a box.
 *
 * Pseudocode:
 * If the string has more than 60 characters,
 * - split the string into new lines
 * - define the length of the longest line
 * Add the border
 * - Define the style top, side, corner
 * - Define the length for top and bottom borders
 * - Iterate each line
 *   - define the padding needed for the right border
 *   - wrap with side borders
 *   - attach to the result
 * - Attach the bottom border
 * Return the border box
 *
 */
import rlSync from 'readline-sync';

const getBorder = () => {
  const splitToLines = (str, max) => {
    if (str.length < max) return [str];

    let arr = [];

    for (let i = 0; i < str.length; i += max) {
      if (i + max >= str.length) {
        arr.push(str.substring(i));
        break;
      }
      let end = str.substring(i, i + max + 1).lastIndexOf(" ");

      if (end <= 0) {
        end = max;
      }

      let line = str.substring(i, i + end + 1);
      arr.push(line);
      i = i + end - max + 1;
    }
    return arr;
  };

  const addBorder = (lines, style, width) => {
    let result = style.top[0].padEnd(width + 3, style.top[1]) + style.top[0];
    for (let line of lines) {
      result += `\n${style.left} ${line.padEnd(width, ' ')} ${style.right}`;
    }
    result +=
      "\n" +
      style.bottom[0].padEnd(width + 3, style.bottom[1]) +
      style.bottom[0];

    return result;
  };

  const getAnswer = (label) => {
    return rlSync.question(label + '\n> ');
  };

  const getStyle = () => {
    const style = {
      string: 'I am a label not specified by master of Afro-Engineering!',
      top: '.-',
      right: '|',
      bottom: '\'-',
      left: '|',
      width: 10,
    };

    let label = getAnswer('Banner text:');
    if (!(label.length === 0)) {
      style.string = label;
    }
    if (
      getAnswer(
        'Would you like to specify max width and border style? y/n') === 'y'
      ) {
      style.width = parseInt(getAnswer('Width:'));
      style.top = getAnswer('Top:');
      style.right = getAnswer('Right:');
      style.bottom = getAnswer('Bottom:');
      style.left = getAnswer('Left:');
    }

    return style;
  };

  const style = getStyle();
  const lines = splitToLines(style.string, style.width - 1);
  return addBorder(lines, style, style.width);
};

console.log(getBorder());
