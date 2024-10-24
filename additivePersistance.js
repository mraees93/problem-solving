// return the additive persistance, which is the number of times you must
//add the digit in num until you reach a single digit
// input: 2718
// output: 2  coz 2+7+1+8 = 18 and 1+8=9 and you stop at 9
// input: 4
// output: 0
// input: 19
// output: 2

function additivePersistance(num) {
	let numsArr = num.toString().split("");
	let iterations = 0;
	if (numsArr.length <= 1) return iterations;
	do {
		numsArr = numsArr
			.map((i) => Number(i))
			.reduce((t, i) => t + i)
			.toString()
			.split("");
		iterations++;
	} while (numsArr.length > 1);
	return iterations;
}
console.log(additivePersistance("4"));
console.log(additivePersistance("19"));
console.log(additivePersistance("99999999999"));
console.log(additivePersistance("2718"));

// function additivePersistance(num) {
// 	let numbers = num.toString().split("");
// 	let count = 0;
// 	if (numbers.length <= 1) return count;
// 	do {
// 		let sum = 0;
// 		for (let i = 0; i < numbers.length; i++) {
// 			sum += Number(numbers[i]);
// 		}
// 		numbers = sum.toString().split("");
// 		count++;
// 	} while (numbers.length > 1);
// 	return count;
// }
// console.log(additivePersistance("4"));
// console.log(additivePersistance("19"));
// console.log(additivePersistance("99999999999"));
// console.log(additivePersistance("2718"));
