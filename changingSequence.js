// return the index at which the numbers in array stop increasing or decreasing
// if theres only one sequence then return -1
// input: [1,2,4,6,4,3,1]
// output: 3 coz 6 is the last point in array where numbers were increasing
//input: [-4, -2, 9, 10]
// output: -1

// function changingSequence(arr) {
// 	let increasing = arr[1] - arr[0] > 0 ? true : false;
// 	for (let i = 2; i < arr.length; i++) {
// 		let sequence = arr[i] > arr[i - 1];
// 		if (sequence !== increasing) return i - 1;
// 	}
// 	return -1;
// }
// console.log(changingSequence([1, 2, 4, 6, 4, 3, 1]));
// console.log(changingSequence([4, 3, 1, 4, 6]));
// console.log(changingSequence([-4, -2, 9, 10]));
// console.log(changingSequence([8, 9, 7, 10, 11, 12]));

// own solution
function changingSequence(arr) {
  const startingSeq = arr[0] < arr[1];
  for (let i = 2; i < arr.length; i++) {
    let currentSeq = arr[i] > arr[i - 1];
    if (currentSeq !== startingSeq) return i - 1;
  }
  return -1;
}
console.log(changingSequence([1, 2, 4, 6, 4, 3, 1]));
console.log(changingSequence([4, 3, 1, 4, 6]));
console.log(changingSequence([-4, -2, 9, 10]));
console.log(changingSequence([8, 9, 7, 10, 11, 12]));

// function changingSequence(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		if (
// 			(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
// 			(arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
// 		) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }
// console.log(changingSequence([1, 2, 4, 6, 4, 3, 1]));
// console.log(changingSequence([4, 3, 1, 4, 6]));
// console.log(changingSequence([-4, -2, 9, 10]));
// console.log(changingSequence([8, 9, 7, 10, 11, 12]));
