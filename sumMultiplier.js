//return string true if any 2 numbers can be multiplied so that the answer is
// greater than double the sum of all the elements in the array.
// input: [2,5,6,-6,16,2,3,6,5,3] sum = 42, doubled = 84
// there are 2 elements in arr,  16 * 6 = 96 and 96 is greater than 84
// output: "true"

// function sumMultiplier(arr) {
//   const sum = arr.reduce((t, i) => t + i) * 2;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] * arr[j] > sum) {
//         return "true";
//       }
//     }
//   }
//   return "false";
// }
function sumMultiplier(arr) {
  const doubledSum = arr.reduce((t, v) => t + v) * 2;
  const sorted = arr.sort((a, b) => a - b).slice(-2);
  if (sorted[0] * sorted[1] > doubledSum) return "true";
  return "false";
}
console.log(sumMultiplier([2, 5, 6, -6, 16, 2, 6, 3, 5, 3]));
console.log(sumMultiplier([2, 2, 2, 2, 4, 1]));
console.log(sumMultiplier([2, 5]));
console.log(sumMultiplier([1, 1, 2, 10, 3, 1, 12]));
