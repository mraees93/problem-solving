// Using the JavaScript language, have the function NonrepeatingCharacter(str)
//take the str parameter being passed,
// which will contain only alphabetic characters and spaces, and return the
//first non-repeating character.
// For example: if str is "agettkgaeee" then your program should return k.
//The string will always contain at least one
// character and there will always be at least one non-repeating character.

function nonRepeatingCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    !obj[str[i]] ? (obj[str[i]] = 1) : obj[str[i]]++;
  }
  return Object.keys(obj).find((i) => obj[i] === 1);
}

// function nonRepeatingCharacter(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     !obj[str[i]] ? (obj[str[i]] = 1) : obj[str[i]]++;
//   }
//   return Object.keys(obj).reduce((key, v) => (obj[v] < obj[key] ? v : key));
// }
// console.log(nonRepeatingCharacter("agettkgaezee"));
// console.log(nonRepeatingCharacter("r"));

// function nonRepeatingCharacter(str) {
// 	let obj = {};
// 	for (let i = 0; i < str.length; i++) {
// 		!obj[str[i]] ? (obj[str[i]] = 1) : obj[str[i]]++;
// 	}
// 	return Object.keys(obj).find(
// 		(k) => obj[k] === Math.min(...Object.values(obj))
// 	);
// }
// console.log(nonRepeatingCharacter("agettkgaezee"));
// console.log(nonRepeatingCharacter("r"));

function nonRepeatingCharacter(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
}
console.log(nonRepeatingCharacter("agettkgaeee"));
