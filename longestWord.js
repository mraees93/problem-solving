// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function longestWord(sen) {
  const arr = sen.match(/[a-z0-9]+/gi);
  let result = "";
  arr.forEach((v) => {
    if (v.length > result.length) {
      result = v;
    }
  });
  return result;
}
console.log(longestWord("Hello world123 567"));
console.log(longestWord("fun&!! time"));
console.log(longestWord("I love dogs"));
console.log(longestWord("123456789 98765432"));

// function longestWord(sen) {
//   const arr = sen.match(/[a-z0-9]+/gi);
//   let result = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > result.length) {
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.log(longestWord("Hello world123 567"));
// console.log(longestWord("fun&!! time"));
// console.log(longestWord("I love dogs"));
// console.log(longestWord("123456789 98765432"));

// function longestWord(sen) {
//   const obj = {};
//   const arr = sen.match(/[a-zA-Z]+/g);
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) obj[arr[i]] = arr[i].length;
//   }
//   return Object.keys(obj).find(
//     (v) => obj[v] === Math.max(...Object.values(obj))
//   );
// }
// console.log(longestWord("Hello world123 567"));
// console.log(longestWord("fun&!! time"));
// console.log(longestWord("I love dogs"));

// function longestWord(sen) {
//   let arr = sen.split(" ");
//   let arr1 = [];
//   for (let str = 0; str < arr.length; str++) {
//     arr1[str] = arr[str].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/gi, "");
//   }
//   return arr1.sort((a, b) => b.length - a.length)[0];
// }
// console.log(longestWord("I love dogs"));
// console.log(longestWord("123456789 98765432"));
