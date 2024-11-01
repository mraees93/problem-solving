// Using the JavaScript language, have the function LargestPair(num) take the
//num parameter being passed and determine
// the largest double digit number within the whole number. For example: if num
//is 4759472 then your program should
// return 94 because that is the largest double digit number. The input will
//always contain at least two positive digits.

function largestPair(num) {
  let arr = [];
  for (let i = 0; i < String(num).length; i++) {
    if (String(num).length === 2) return num;
    arr[i] = Number(String(num).slice(i, i + 2));
  }
  return Math.max(...arr);
}
console.log(largestPair(47));
console.log(largestPair(123456789));

// function largestPair(num) {
// 	let nums = String(num);
// 	let arr = [];
// 	if (nums.length === 2) return num;
// 	for (let i = 0; i < nums.length; i++) {
// 		arr[i] = Number(nums.slice(i, i + 2));
// 	}
// 	return Math.max(...arr);
// }
// console.log(largestPair(4759472));
// console.log(largestPair(123456789));

function largestPair(num) {
  const str = num.toString(),
    nums = [];
  for (let i = 1; i < str.length; i++) {
    nums.push(+(str[i - 1] + str[i]));
  }
  return Math.max(...nums);
}
console.log(largestPair(4759472));
