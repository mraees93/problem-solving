/*
have the function StringPeriods(str) take the str parameter being passed and 
determine if there is some substring K that can be repeated N > 1 times to 
produce the input string exactly as it appears. Your program should return 
the longest substring K, and if there is none it should return the string -1.
For example: if str is "abcababcababcab" then your program should return abcab 
because that is the longest substring that is repeated 3 times to create the 
final string. Another example: if str is "abababababab" then your program should 
return ababab because it is the longest substring. If the input string contains 
only a single character, your program should return the string -1.
*/

function stringPeriods(str) {
	let i = Math.ceil(str.length / 2);
	while (i > 1) {
		const substring = str.slice(0, i);
		const repeated = substring.repeat(str.length / i);
		if (repeated === str) return substring;
		i--;
	}
	return "-1";
}
console.log(stringPeriods("abcababcababcab")); //abcab
console.log(stringPeriods("abababababab")); //ababab
console.log(stringPeriods("qwertqwertqwertqwert"));

// function stringPeriods(str) {
// 	const length = str.length;
// 	if (length > 1) {
// 		for (let i = Math.ceil(length / 2); i > 1; i--) {
// 			const substring = str.slice(0, i);
// 			const repeated = substring.repeat(length / i);
// 			if (repeated === str) {
// 				return substring;
// 			}
// 		}
// 	}
// 	return "-1";
// }
// console.log(stringPeriods("abcababcababcab")); //abcab
// console.log(stringPeriods("abababababab")); //ababab
// console.log(stringPeriods("qwertqwertqwertqwert"));
