// replace every letter in string with letter following it in alphabet
// then capitalize every vowel in the string
// input: "hello*3"
// output: Ifmmp*3

// function letterChanges(str) {
// 	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// 	const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
// 	const vowels = "aeiou";
// 	let arr = [];
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i].match(/\W/gi) || str[i].match(/\[0-9]/gi)) {
// 			arr.push(str[i]);
// 		}
// 		for (let j = 0; j < alphabet.length; j++) {
// 			if (str[i] === alphabet[j]) {
// 				arr.push(alphabet[j + 1]);
// 			}
// 		}
// 	}
// 	return arr
// 		.map((letter) =>
// 			vowels.indexOf(letter) > -1 ? letter.toUpperCase() : letter
// 		)
// 		.join("");
// }
// console.log(letterChanges("hello*3"));

// my final solution
function letterChanges(str) {
	const vowels = "aeiou";
	let arr = str
		.replace(/[a-zA-Z]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 1))
		.split("");
	return arr
		.map((letter) =>
			vowels.indexOf(letter) > -1 ? letter.toUpperCase() : letter
		)
		.join("");
}
console.log(letterChanges("hello*3"));

// highest rated solution
// function letterChanges(str) {
// 	return str
// 		.replace(/[a-zA-Z]/g, (x) => String.fromCharCode(x.charCodeAt(0) + 1))
// 		.replace(/[aeiou]/g, (v) => v.toUpperCase());
// }
// console.log(letterChanges("hello*3"));
