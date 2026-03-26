//  For this challenge you will be sorting characters in a string.
// take the str string parameter being passed and return the string with the letters in alphabetical order 
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 


function AlphabetSoup(str: string) : string {
    return str.toLowerCase().split('').sort().join('')
}
console.log(AlphabetSoup('hello'));

const numbers1 = [45, 4, 9, 16, 25];
const myFunction = (value: number) => value * 2;
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
