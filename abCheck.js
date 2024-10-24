// return the string true if string param contains "a" and "b" and and is seperated by exactly 3 spaces
//anywhere in the string
// otherwise return false
//input: "lane borrowed"
//output: "true"

// function abCheck(str) {
// 	let arr1;
// 	let arr = str.split("");
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] === "a" && arr[j] === "b") {
// 				arr1 = arr.slice(i + 1, j);
// 			}
// 		}
// 	}
// 	return arr1.length === 3 ? "true" : "false";
// }
// console.log(abCheck("lane borrowed"));
// console.log(abCheck("123advb"));
// console.log(abCheck("123adzvb"));
// console.log(abCheck("abccccazzzb"));
// console.log(abCheck("bzzza"));

// my final solution
function abCheck(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (
      (str[i] === "a" && str[i - 4] === "b") ||
      (str[i] === "b" && str[i - 4] === "a")
    )
      return "true";
  }
  return "false";
}
console.log(abCheck("lane borrowed"));
console.log(abCheck("123advb"));
console.log(abCheck("123adzvb"));
console.log(abCheck("abccccazzzb"));
console.log(abCheck("bzzza"));
console.log(abCheck("laura sobs"));
console.log(abCheck(""));
