// For this challenge you will determine if a palindrome can be created in a string.
/*
have the function PalindromeSwapper(str) take the str parameter being passed and 
determine if a palindrome can be created by swapping two adjacent characters in 
the string. If it is possible to create a palindrome, then your program should 
return the palindrome, if not then return the string -1. The input string will 
only contain alphabetic characters. For example: if str is "rcaecar" then you 
can create a palindrome by swapping the second and third characters, so your 
program should return the string racecar which is the final palindromic string.
*/

// function palindromeSwapper(str) {
// 	let a = str.split("");
// 	const permute = (a, permutations = []) =>
// 		a.length === 0
// 			? [permutations]
// 			: a.flatMap((v, i, arr) =>
// 					permute(
// 						arr.filter((_, j) => j !== i),
// 						[...permutations, v]
// 					)
// 			  );
// 	const res = [...new Set(permute(a).map((arr) => arr.join("")))];
// 	return res.filter((i) => i === i.split("").reverse().join(""));
// }
// console.log(palindromeSwapper("rcaecar"));
// //console.log(palindromeSwapper("nurses urn"));
// console.log(palindromeSwapper("abab"));
// console.log(palindromeSwapper("wwo"));

function palindromeSwapper(str) {
	for (let i = 0; i < str.length; i++) {
		let newStr =
			str.substr(0, i) +
			str[i + 1] +
			str.substring(i + 1, i + 1) +
			str[i] +
			str.substr(i + 2);
		let palindrome = newStr.split("").reverse().join("");
		if (newStr === palindrome) return newStr;
	}
	return -1;
}
console.log(palindromeSwapper("rcaecar"));
console.log(palindromeSwapper("abc"));
console.log(palindromeSwapper("wwo"));
console.log(palindromeSwapper("kayka"));
