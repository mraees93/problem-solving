// For this challenge you will determine if a stream of digits occurs in a string.
/*
have the function NumberStream(str) take the str parameter being passed which 
will contain the numbers 2 through 9, and determine if there is a consecutive 
stream of digits of at least N length where N is the actual digit value. If so, 
return the string true, otherwise return the string false. For example: if str
is "6539923335" then your program should return the string true because there 
is a consecutive stream of 3's of length 3. The input string will always contain 
at least one digit.
*/

function numberStream(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.includes(str[i].repeat(Number(str[i])))) {
			return "True";
		}
	}
	return "false";
}
console.log(numberStream("6539923335"));
console.log(numberStream("25399225"));
console.log(numberStream("253992225"));
console.log(numberStream("5556293383563665"));
console.log(numberStream("5788888888882339999"));
