// input: "abc1*kyoo"
// output: "akbyco1o"

function stringMerge(str) {
	let arr = str.split("*");
	let s = "";
	for (let i = 0; i < arr[0].length; i++) {
		s = s + arr[0][i] + arr[1][i];
	}
	return s;
}
console.log(stringMerge("abc1*kyoo"));
console.log(stringMerge("abc1we*kyooqa"));
