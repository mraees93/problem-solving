/*
have the function ElementMerger(arr) take the array of positive integers stored 
in arr and perform the following algorithm: continuously get the difference of 
adjacent integers to create a new array of integers, then do the same for the 
new array until a single number is left and return that number. For example: 
if arr is [4, 5, 1, 2, 7] then taking the difference of each pair of elements 
produces the following new array: [1, 4, 1, 5]. Then do the same for this new 
array to produce [3, 3, 4] -> [0, 1] -> 1. So for this example your program 
should return the number 1 because that is what's left at the end.
*/

function ElementMerger(arr) {
	arr = [arr];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 1) arr.push([]);
		for (let j = 1; j < arr[i].length; j++) {
			arr[i + 1].push(Math.abs(arr[i][j] - arr[i][j - 1]));
		}
	}
	return arr[arr.length - 1][0];
}
console.log(ElementMerger([4, 5, 1, 2, 7]));
console.log(ElementMerger([3, 9, 2, 18, 10]));
