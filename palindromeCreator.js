/* have the function PalindromeCreator(str) take the str parameter being passed 
and determine if it is possible to create a palindromic string of at least 3 
characters by removing 1 or 2 characters. For example: if str is "abjchba" then 
you can remove the characters jc to produce "abhba" which is a palindrome. For 
this example your program should return the two characters that were removed with
no delimiter and in the order they appear in the string, so jc. If 1 or 2 
characters cannot be removed to produce a palindrome, then return the string not 
possible. If the input string is already a palindrome, your program should return
the string palindrome.  The input will only contain lowercase alphabetic 
characters.Your program should always attempt to create the longest palindromic 
substring by removing 1 or 2 characters(see second sample test case as an example)
.The 2 characters you remove do not have to be adjacent in the string. */

function palindromeCreator(str) {
  const arr = str.split("");
  const reversedArr = (arr) => arr.slice(0).reverse().join("");
  let result = "";
  if (arr.join("") === reversedArr(arr)) return "palindrome";
  for (let i = 0; i < arr.length; ) {
    if (arr[i] !== reversedArr(arr)[i] && result.length < 2) {
      result += arr[i];
      arr.splice(i, 1);
      if (arr.join("") === reversedArr(arr)) return result;
    }
    if (arr[i] === reversedArr(arr)[i]) {
      i++;
    }
  }
  return "NP";
}
// console.log(palindromeCreator("aba")); //palindrome
// console.log(palindromeCreator("abjchba")); //jc
console.log(palindromeCreator("mmop")); //NP
console.log(palindromeCreator("kjjjhjjj")); //k
//console.log(palindromeCreator("lolkm")); // km
