/*
have the function OneDecremented(num) count how many times a digit appears that 
is exactly one less than the previous digit. For example: if num is 5655984 then
your program should return 2 because 5 appears directly after 6 and 8 appears 
directly after 9. The input will always contain at least 1 digit.
*/

function OneDecremented(num) {
	let count = 0;
	let arr = String(num).split("").map(Number);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] - 1 === arr[i + 1]) {
			count++;
		}
	}
	return count;
}
console.log(OneDecremented(5655984));
console.log(OneDecremented(32769821));
