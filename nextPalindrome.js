// Using the JavaScript language, have the function NextPalindrome(num) take
//the num parameter being passed and
// return the next largest palindromic number. The input can be any positive
//integer. For example: if num is 24, then
// your program should return 33 because that is the next largest number that
//is a palindrome.

function nextPalindrome(num) {
	for (; num !== Number(String(num).split("").reverse().join("")); ) {
		num++;
	}
	return num;
}
console.log(nextPalindrome(24));

// function nextPalindrome(num) {
// 	while (num <= num + num) {
// 		num++;
// 		let palindrome = Number(String(num).split("").reverse().join(""));
// 		if (num === palindrome) {
// 			return palindrome;
// 		}
// 	}
// }
// console.log(nextPalindrome(131));
