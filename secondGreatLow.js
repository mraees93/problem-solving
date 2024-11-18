// return second lowest and second greatest numbers in array
// input: [1,42,42,180]
// output: 42 42
//input: [4, 90]
// output: 90 4

function secondGreatLow(arr) {
	arr = arr.sort((a, b) => a - b);
	const secondLowest = arr[arr.lastIndexOf(Math.min(...arr)) + 1];
	const secondHighest = arr[arr.indexOf(Math.max(...arr)) - 1];
	return arr.length === 2
		? `${arr[1]} ${arr[arr.length - 2]}`
		: secondLowest + " " + secondHighest;
}
console.log(secondGreatLow([1, 42, 42, 180]));
console.log(secondGreatLow([4, 90]));
console.log(secondGreatLow([1, 2, 3, 100]));
console.log(secondGreatLow([2, 2, 2, 5, 5, 5, 6]));
console.log(secondGreatLow([7, 7, 12, 98, 106]));
console.log(secondGreatLow([1, 5, 10, 1, 25, 1, 5, 5, 5, 40, 5, 1, 100]));
console.log(secondGreatLow([1, 2, 2, 34, 76, 5, 321, 98, 454, 454, 3, 787, 6]));

// longer github solution
// function secondGreatLow(arr) {
// 	if (arr.length === 2) {
// 		arr.sort(function (a, b) {
// 			return a - b;
// 		});
// 		return arr[1] + " " + arr[0];
// 	}

// 	var uniqueArray = arr.filter(function (item, pos) {
// 		return arr.indexOf(item) == pos;
// 	});

// 	if (uniqueArray.length > 2) {
// 		uniqueArray.sort(function (a, b) {
// 			return a - b;
// 		});
// 		return uniqueArray[1] + " " + uniqueArray[uniqueArray.length - 2];
// 	} else {
// 		return uniqueArray[1] + " " + uniqueArray[0];
// 	}
// }
// console.log(secondGreatLow([1, 42, 42, 180]));
// console.log(secondGreatLow([4, 90]));
// console.log(secondGreatLow([1, 2, 3, 100]));
// console.log(secondGreatLow([2, 2, 2, 5, 5, 5, 6]));
// console.log(secondGreatLow([7, 7, 12, 98, 106]));
// console.log(secondGreatLow([1, 5, 10, 1, 25, 1, 5, 5, 5, 40, 5, 1, 100]));
