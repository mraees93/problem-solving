// Using the JavaScript language, have the function ProductDigits(num) take the
//num parameter being passed which will
// be a positive integer, and determine the least amount of digits you need to
//multiply to produce it. For example:
// if num is 24 then you can multiply 8 by 3 which produces 24, so your program
//should return 2 because there is a
// total of only 2 digits that are needed. Another example: if num is 90, you
//can multiply 10 * 9, so in this case
// your program should output 3 because you cannot reach 90 without using a total
//of 3 digits in your multiplication.

function productDigits(num) {
  let multiples = [];
  let i = 1;
  while (num % i === 0) {
    multiples.push(String(i) + String(num / i));
    i++;
  }
  return multiples.sort((a, b) => a - b)[0].length;
}
console.log(productDigits(24));
// console.log(productDigits(90));
// console.log(productDigits(23));

// function productDigits(num) {
// 	let a = [];
// 	let pairs = [];
// 	for (let i = Math.ceil(num / 2); i >= 1; i--) {
// 		a.push(Math.floor(num / i));
// 	}
// 	for (let i = 0; i < a.length; i++) {
// 		for (let j = i + 1; j < a.length; j++) {
// 			if (a[i] * a[j] === num) {
// 				pairs.push([a[i], a[j]]);
// 			}
// 		}
// 	}
// 	return pairs.map((i) => i.join("")).sort((a, b) => a - b)[0].length;
// }
// console.log(productDigits(24));
// console.log(productDigits(90));
// console.log(productDigits(33));

// function productDigits(num) {
// 	let values = [];
// 	for (let i = num - 1; i >= 0; i--) {
// 		if (num % i === 0) {
// 			let divide = num / i;
// 			values.push(i.toString() + divide.toString());
// 		}
// 	}
// 	let sorted = values.sort((a, b) => a - b);
// 	return sorted[0].length;
// }
// console.log(productDigits(24));
