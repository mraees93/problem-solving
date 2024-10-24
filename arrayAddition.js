// return string true if the numbers in array adds up to the largest number in the array
// otherwise return false
// [4,6,23,10,1,3] outputs true coz 4+6+10+3 = 23

// function arrayAddition(arr) {
// 	let total = 0;
// 	let max = arr.sort((a, b) => a - b).pop();
// 	let sortedArr = arr.sort((a, b) => a - b);
// 	console.log(sortedArr);
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === max) {
// 				return "true";
// 			}
// 		}
// 	}
// 	return "false";
// } //235 > 10 then accumulated num - addedNum then if answer is in array then delete that number
// //console.log(arrayAddition([4, 6, 10, 23, 1, 3])); //23
// console.log(arrayAddition([1, 2, 3, 5, 7, 8, 10])); //2+3+5 //3+7  //8+2 //1+2+7

// longer solution
// function arrayAddition(arr) {
// 	Steps for solution                                                                  *
// *    1) Sort array in ascending order.                                                 *
// *    2) Remove largest number from array and store in largest                          *
// *    3) Loop through each number in array                                              *
// *    4) Add every other number to this number and see if total matches largest         *
// *    5) If match return True else return False
// *                                                                                      *
// ***************************************************************************************/

// function arrayAddition(arr) {
// 	arr.sort(function (a, b) {
// 		return a - b;
// 	});
// 	var maxNum = arr.pop();
// 	var tot = 0;

// 	for (var i = 0; i < arr.length; i++) {
// 		tot += arr[i];
// 		for (var j = 0; j < arr.length; j++) {
// 			if (i != j) {
// 				tot += arr[j];
// 				if (tot == maxNum) {
// 					return true;
// 				}
// 			}
// 		}

// 		for (var k = 0; k < arr.length; k++) {
// 			if (i != k) {
// 				tot -= arr[k];
// 				if (tot == maxNum) {
// 					return true;
// 				}
// 			}
// 		}
// 		tot = 0;
// 	}

// 	return false;
// }
// console.log(arrayAddition([4, 6, 10, 23, 1, 3])); //23
// console.log(arrayAddition([1, 2, 3, 5, 7, 8, 10])); //2+3+5 //3+7  //8+2 //1+2+7

// recursion
function arrayAddition(arr) {
	let max = arr.sort((a, b) => a - b).pop();
	function recursion(arr) {
		let arrSum = arr.reduce((sum, num) => sum + num, 0);
		if (arrSum !== max) {
			let i = 0;
			while (i < arr.length) {
				let newArr = arr.slice();
				newArr.splice(i, 1);
				if (recursion(newArr)) {
					return true;
				}
				i++;
			}
			return false;
		} else {
			return true;
		}
	}
	return recursion(arr);
}
console.log(arrayAddition([4, 6, 10, 23, 1, 3]));
console.log(arrayAddition([1, 2, 3, 5, 7, 8, 10]));
console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([3, 5, -1, 8, 12]));
