// insert dashes between each 2 odd numbers in str
// dont count zero as odd number
// input: "454793"
// output: "4547-9-3"

// my first solution
// function dashInsert(str) {
// 	let arr = str.split("").map(Number);
// 	let s = "";
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
// 			s += arr[i];
// 			s += "-";
// 		} else {
// 			s += arr[i];
// 		}
// 	}
// 	console.log(s);
// }
// console.log(dashInsert("454793"));
// console.log(dashInsert("4534793"));
// console.log(dashInsert("4547939"));
// console.log(dashInsert("17454793"));
// console.log(dashInsert("45444793"));
// console.log(dashInsert("333"));

// 2nd solution
function dashInsert(str) {
	for (let i = 0; i < str.length; i++) {
		if (parseInt(str[i]) % 2 === 1 && parseInt(str[i + 1]) % 2 === 1) {
			str = str.substring(0, i + 1) + "-" + str.substring(i + 1);
		}
	}
	return str;
}
console.log(dashInsert("454793"));
console.log(dashInsert("4534793"));
console.log(dashInsert("4547939"));
console.log(dashInsert("17454793"));
console.log(dashInsert("45444793"));
console.log(dashInsert("333"));
