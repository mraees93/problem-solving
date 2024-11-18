// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true

// function questionsMarks(str) {
// 	let numbers = "1234567890";
// 	let qmarks = 0;
// 	// loop through str
// 	for (let i = 0; i < str.length; i++) {
// 		if (numbers.includes(str[i])) {
// 			s = str.substring(parseInt(str[i] - 1)); //**************************************
// 		}
// 	}
// 	// if a number is in the string, cut substring and end where there is another number
// 	// for (let i = 1; i < s.length; i++) {
// 	// 	if (s.includes(numbers[i])) {
// 	// 		st = s.substring(0, parseInt(numbers[i]) + 1);
// 	// 	}
// 	// }
// 	return s;
// 	// check the substring if the two numbers add up to ten and if there are 3 question marks between them
// 	// for (let i = 0; i < st.length; i++) {
// 	// 	if (st[i] === "?") {
// 	// 		qmarks = qmarks + 1;
// 	// 	}
// 	// }
// 	// if (qmarks === 3 && parseInt(st[0]) + parseInt(st[st.length - 1]) === 10) {
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }
// }
// console.log(questionsMarks("aa6?9"));

// function questionMarks(str) {
// 	res = false;
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (Number(str[i]) + Number(str[j]) === 10) {
// 				res = true;
// 				if (str.slice(i, j).split("?").length - 1 < 3) {
// 					return false;
// 				}
// 			}
// 		}
// 	}
// 	return res;
// }
// console.log(questionMarks("acc?7??sss?3rr1??????5"));

// function questionMarks(str) {
// 	let matches = str.match(/\d[\w\?]*?\d/g);
// 	if (!matches) return false;
// 	let result = false;
// 	for (let match of matches) {
// 		if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
// 			if (match.split("").filter((char) => char === "?").length === 3) {
// 				result = true;
// 			} else {
// 				return false;
// 			}
// 		}
// 	}
// 	return result;
// }
// console.log(questionMarks("acc?7??sss?3rr1??????5"));

// function questionMarks(str) {
// 	let regex = /\d[\w\?]*?\d/g;
// 	let unique = new Set();
// 	while (str.length > 0) {
// 		let match = regex.exec(str);
// 		if (match !== null && parseInt(match[1]) + parseInt(match[3]) >= 10) {
// 			unique.add(match[2]);
// 		}
// 		str = str.replace(str[0], "");
// 	}
// 	let qtest = Array.from(unique).map((x) => x.match(/\?/g).length === 3);
// 	return qtest.length === 0 || qtest.indexOf(false) !== -1 ? false : true;
// }
// console.log(questionMarks("acc?7??sss?3rr1??????5"));

// function questionMarks(str) {
//   let output = false;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (parseInt(str[i]) + parseInt(str[j]) === 10) {
//         if (
//           str
//             .substring(i, j + 1)
//             .split("")
//             .filter((char) => char === "?").length === 3
//         ) {
//           output = true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
//   return output;
// }
// console.log(questionMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"));
// console.log(questionMarks("acc?7??sss?3rr1??????5"));

function questionMarks(str) {
  const regex = /\d[\w\?]*?\d/g;
  console.log(regex.exec(str));
}
console.log(questionMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"));
console.log(questionMarks("acc?7??sss?3rr1??????5"));
