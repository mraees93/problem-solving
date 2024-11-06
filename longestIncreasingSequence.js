// return the longest increasing sequence
// input: [4,3,5,1,6]
// output: 3 coz LIS is [3,5,6]
// input: [10,22,9,33,21,50,41,60,22,68,90]
// output: 7
// input: [9,9,4,2]
// output: 1

// function longestIncreasingSequence(arr) {
// 	let max = 0;
// 	let lis = Array(arr.length).fill(1);
// 	for (let i = 1; i < arr.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
// 				lis[i] = lis[j] + 1;
// 			}
// 			max = Math.max(lis[i], max);
// 		}
// 	}
// 	return max;
// }
// console.log(longestIncreasingSequence([4, 3, 5, 1, 6]));
// console.log(longestIncreasingSequence([9, 9, 4, 2]));
// console.log(longestIncreasingSequence([3, 4, 2, 1, 10, 6, 5, 7, 9]));
// console.log(
// 	longestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
// );

//lis = [1, 1, 2, 1, 3]
//max = 3

function longestIncreasingSequence(arr) {
	let LIS = 0;
	let arr2 = Array(arr.length).fill(1);
	let i = 1;
	while (i < arr.length) {
		let j = 0;
		while (j < i) {
			if (arr[i] > arr[j] && arr2[i] < arr2[j] + 1) {
				arr2[i] = arr2[j] + 1;
			}
			LIS = Math.max(arr2[i], LIS);
			j++;
		}
		i++;
	}
	return LIS;
}
console.log(longestIncreasingSequence([4, 3, 5, 1, 6]));
console.log(longestIncreasingSequence([9, 9, 4, 2]));
console.log(longestIncreasingSequence([3, 4, 2, 1, 10, 6, 5, 7, 9]));
console.log(
	longestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
);
