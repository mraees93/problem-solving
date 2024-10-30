// return the string true if there is an equal number of x's and o's
// otherwise return the string false
// input: "xooxxxxooxo"
// output: "false" coz theres 6 x's and 5 o's

function exOh(str) {
	let x = 0;
	let o = 0;
	for (let i = 0; i < str.length; i++) {
		str[i] === "x" ? x++ : str[i] === "o" ? o++ : i++;
	}
	return x === o;
}
console.log(exOh("xooxxxxooxo"));
console.log(exOh("x"));
console.log(exOh("zzz"));

// function exOh(str) {
// 	return str.split("x").length === str.split("o").length;
// }
// console.log(exOh("xooxxxxooxo"));
// console.log(exOh("x"));
// console.log(exOh("zzz"));
