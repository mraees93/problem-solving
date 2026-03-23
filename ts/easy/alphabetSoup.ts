//  For this challenge you will be sorting characters in a string.
// take the str string parameter being passed and return the string with the letters in alphabetical order 
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 


function AlphabetSoup(str: string) : string {
    return str.toLowerCase().split('').sort().join('')
}
console.log(AlphabetSoup('hello'));
