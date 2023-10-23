// ((num) => {
//   while (num > 0) {
//     console.log(num);
//     num--;
//   }
// })(7);

// Add a recursive solution

(function countdown(num) {
  console.log(num);
  if (num > 0) return countdown(num - 1);
})(7);