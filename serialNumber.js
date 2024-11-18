/*
have the function SerialNumber(str) take the str parameter being passed and 
determine if it is a valid serial number with the following constraints:
1. It needs to contain three sets each with three digits (1 through 9) separated 
by a period.
2. The first set of digits must add up to an even number.
3. The second set of digits must add up to an odd number.
4. The last digit in each set must be larger than the two previous digits in the 
same set.
If all the above constraints are met within the string, the your program should 
return the string true, otherwise your program should return the string false. 
For example: if str is "224.315.218" then your program should return "true".
*/

function serialNumber(str) {
	let arr = str.split(".");
	let tot1 = arr[0].split("").reduce((t, i) => Number(t) + Number(i));
	let tot2 = arr[1].split("").reduce((t, i) => Number(t) + Number(i));
	let count = 0;
	let total = 0;
	if (tot1 % 2 === 0) count++;
	if (tot2 % 2 === 1) count++;
	for (let i = 0; i < arr.length; i++) {
		let nums = arr[i].split("").map(Number);
		for (let j = nums.length - 1; j >= 0; j--) {
			if (nums[j] > nums[j - 1] && nums[j] > nums[j - 2]) {
				total++;
			}
		}
		if (total === 3) count++;
	}
	return count === 3 ? "true" : "false";
}
console.log(serialNumber("224.315.218"));
console.log(serialNumber("264.313.218"));
console.log(serialNumber("220.305.265"));
