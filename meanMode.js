// return 1 if mode equals the mean, 0 if they dont equal
// input: [5,3,3,3,1]
// output: 1 coz the mode(3) equals the mean(3)

function meanMode(arr) {
	let total = 0,
		mode = 0,
		count = 0;
	let numsCount = {};
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		total += num;
		if (!numsCount[num]) {
			numsCount[num] = 1;
		} else {
			numsCount[num]++;
		}
		if (count < numsCount[num]) {
			mode = num;
			count = numsCount[num];
		}
	}
	const mean = total / arr.length;
	return mean === mode ? 1 : 0;
}
console.log(meanMode([5, 3, 3, 3, 1]));
console.log(meanMode([5, 2, 2, 2, 3]));
console.log(meanMode([7, 2, 5, 3, 1]));

// function meanMode(arr) {
// 	let numsCount = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		if (numsCount[num]) {
// 			numsCount[num]++;
// 		} else {
// 			numsCount[num] = 1;
// 		}
// 	}
// 	return numsCount;
// }
// console.log(meanMode([5, 3, 3, 3, 1]));
// console.log(meanMode([5, 3, 2, 8, 1]));
// console.log(meanMode([7, 2, 1, 3, 1]));
