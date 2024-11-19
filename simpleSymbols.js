// return true if each letter is surrounded by a + symbol
// input: "++d+===+c++==a"
//output: "false"

// function simpleSymbols(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] >= "a" && str[i] <= "z") {
// 			if (i === 0 || i === str.length) {
// 				return "false";
// 			}
// 			if (str[i - 1] !== "+" || str[i + 1] !== "+") {
// 				return "false";
// 			}
// 		}
// 	}
// 	return "true";
// }
// console.log(simpleSymbols("++d+===+c++==a"));
// console.log(simpleSymbols("++d++a+"));

function simpleSymbols(str) {
	let pattern = str.match(/\+[a-z]\+/g);
	let letters = str.match(/[a-z]/g);
	if (pattern.length === letters.length) {
		return "true";
	} else {
		return "false";
	}
}
console.log(simpleSymbols("++d+===+c++==a"));
console.log(simpleSymbols("++d++a+"));
