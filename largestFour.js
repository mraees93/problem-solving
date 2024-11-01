// find the 4 largest integers in array and return the sum, if arr has less than
// 4 numbers the program should return the sum of all numbers in arr
// input: [4,5,-2,3,1,2,6,6]
// output: 21 coz 6+6+4+5

function largestFour(arr) {
	let total = 0;
	arr.sort((a, b) => b - a);
	const maxFour = arr.slice(0, 4);
	for (let i = 0; i < maxFour.length; i++) {
		arr.length < 4 ? (total += arr[i]) : (total += maxFour[i]);
	}
	return total;
}
console.log(largestFour([4, 5, -2, 3, 1, 2, 6, 6]));
console.log(largestFour([4, 5, -2]));
