//return the string true if both sets of ranges overlap
// by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program
// should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10
// and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array
// is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6.
// If both ranges do not overlap by at least x numbers, then your program should
// return the string false.
// Sample Test Cases
// Input:5,11,1,5,1
// Output:true
// Input:1,8,2,4,4
// Output:false

function overlappingRanges(arr) {
	let res = [];
	let i = arr[0];
	while (i < arr[1]) {
		if (i >= arr[2] && i <= arr[3]) {
			res.push(i);
		}
		i++;
	}
	return res.length >= arr[4] ? "true" : "false";
}
console.log(overlappingRanges([5, 11, 1, 5, 1]));
console.log(overlappingRanges([1, 8, 2, 4, 4]));
console.log(overlappingRanges([10, 20, 4, 14, 4]));

// function overlappingRanges(arr) {
// 	let counter = 0;
// 	for (let i = arr[0]; i < arr[1]; i++) {
// 		console.log(i);
// 		if (i >= arr[2] && i <= arr[3]) {
// 			counter++;
// 		}
// 	}
// 	console.log(counter);
// 	return counter >= arr[4] ? true : false;
// }
// //console.log(overlappingRanges([5, 11, 1, 5, 1]));
// console.log(overlappingRanges([1, 8, 2, 4, 4]));
// //console.log(overlappingRanges([10, 20, 4, 14, 4]));

// function overlappingRanges(arr) {
// 	let target = arr.pop();
// 	let max = Math.max(arr[0], arr[2]);
// 	let min = Math.min(arr[1], arr[3]);
// 	console.log(max);
// 	console.log(min);
// 	let range = min - max + 1;
// 	return range >= target;
// }
// //console.log(overlappingRanges([5, 11, 1, 5, 1]));
// //console.log(overlappingRanges([1, 8, 2, 4, 4]));
// console.log(overlappingRanges([10, 20, 4, 14, 4]));
