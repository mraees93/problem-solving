// get the first word with most repeated chars else -1
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words")); -1
// console.log(LetterCountI("bb ccc"));

// function letterCount(str) {
//   const arrObj = {};
//   const arr = str.toLowerCase().split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let obj = {};
//     for (let j = 0; j < arr[i].length; j++) {
//       if (!obj[arr[i][j]]) obj[arr[i][j]] = 1;
//       else obj[arr[i][j]]++;
//     }
//     let repeatedChars = Object.values(obj).filter((v) => v > 1);
//     if (repeatedChars.length >= 1) {
//       repeatedChars = repeatedChars.reduce((t, v) => t + v);
//       arrObj[arr[i]] = repeatedChars;
//     }
//   }
//   return JSON.stringify(arrObj) === "{}"
//     ? -1
//     : Object.keys(arrObj).find(
//         (key) => arrObj[key] === Math.max(...Object.values(arrObj))
//       );
// }

// function LetterCountI(str) {
// 	const arr = str.toLowerCase().split(" ");
// 	let letterCount = 0;
// 	let wordWithMostRepeatedChars = "-1";
// 	for (let word = 0; word < arr.length; word++) {
// 		for (let letter = 0; letter < arr[word].length; letter++) {
// 			let sameLetterCount = 0;
// 			if (arr[letter] === arr[letter + 1]) {
// 				sameLetterCount++;
// 			}
// 			if (sameLetterCount > letterCount) {
// 				letterCount = sameLetterCount;
// 				wordWithMostRepeatedChars = arr[word].replace(/[^a-zA-Z]/g, "");
// 			}
// 		}
// 	}
// 	return wordWithMostRepeatedChars;
// }
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("the greatest, i am the greatest"));
// console.log(LetterCountI("today is the greatest day ever"));
// console.log(LetterCountI("ab cd ef gh ij kl mn"));

// function LetterCountI(str) {
// 	str.toLowerCase();
// 	var arr = str.split(" ");
// 	var count = 0;
// 	var word = "-1";
// 	for (var i = 0; i < arr.length; i++) {
// 		for (var a = 0; a < arr[i].length; a++) {
// 			var countNew = 0;
// 			for (var b = a + 1; b < arr[i].length; b++) {
// 				if (arr[i][a] === arr[i][b]) countNew += 1;
// 			}
// 			if (countNew > count) {
// 				count = countNew;
// 				word = arr[i];
// 			}
// 		}
// 	}
// 	return word;
// }
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words"));
// console.log(LetterCountI("bb ccc"));

// function LetterCountI(str) {
//   var maxCount = 0;
//   var word = "-1";

//   //split string into words based on spaces and count repeated characters
//   str
//     .toLowerCase()
//     .split(" ")
//     .forEach(function (currentWord) {
//       var hash = {};

//       //split word into characters and increment a hash map for repeated values
//       currentWord.split("").forEach(function (letter) {
//         if (hash.hasOwnProperty(letter)) {
//           hash[letter]++;
//         } else {
//           hash[letter] = 1;
//         }
//       });

//       //covert the hash map to an array of character counts
//       var characterCounts = Object.keys(hash).map(function (key) {
//         return hash[key];
//       });

//       //find the maximum value in the squashed array
//       var currentMaxRepeatedCount = Math.max.apply(null, characterCounts);

//       //if the current word has a higher repeat count than previous max, replace it
//       if (currentMaxRepeatedCount > maxCount) {
//         maxCount = currentMaxRepeatedCount;
//         word = currentWord;
//       }
//     });
//   return word;
// }
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words"));
// console.log(LetterCountI("bb ccc"));

// function LetterCountI(str) {
// 	return (
// 		((str = str
// 			.split(" ")
// 			.map(function (word) {
// 				var letters = word.split("").reduce(function (map, letter) {
// 					map[letter] = map.hasOwnProperty(letter) ? map[letter] + 1 : 1;
// 					return map;
// 				}, {}); // map of letters to number of occurrences in the word

// 				return {
// 					word: word,
// 					count: Object.keys(letters).filter(function (letter) {
// 						return letters[letter] > 1;
// 					}).length, // number of repeated letters
// 				};
// 			})
// 			.sort(function (a, b) {
// 				// Sort words by number of repeated letters
// 				return b.count - a.count;
// 			})
// 			.shift()) &&
// 			str.count &&
// 			str.word) ||
// 		-1
// 	); // return first word with maximum repeated letters or -1
// }
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words"));
// console.log(LetterCountI("bb ccc"));

function letterCount(str) {
  let vals = [];
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    for (let j = 0; j < arr[i].length; j++) {
      if (!obj[arr[i][j]]) {
        obj[arr[i][j]] = 1;
      } else {
        obj[arr[i][j]]++;
      }
    }
    //console.log(obj);
    //if (Object.values(obj).every((v) => v === 1)) return -1;
    vals.push(Object.values(obj).reduce((t, i) => t + i));
  }
  console.log(vals);
  //if (vals.length === 0) return -1;
  if (vals.every((v, i, vals) => v === vals[0])) return arr[0];
  return arr[vals.indexOf(Math.max(...vals))];
}
console.log(letterCount("hello apple pie"));
console.log(letterCount("no words"));
console.log(letterCount("bb ccc"));
console.log(letterCount("today is the greatest day ever"));
console.log(letterCount("phones earphones"));
console.log(letterCount("no love lost"));
console.log(letterCount("slippery slope"));
console.log(letterCount("bubble bobble"));
