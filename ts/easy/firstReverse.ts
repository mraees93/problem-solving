// Have the function FirstReverse(str) take the str parameter being passed and return the string in 
// reversed order. 

function firstReverse(str: string) : string {
    let reverseString = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString + str[i];
    }

    return reverseString;
}
console.log(firstReverse('hello'));

function firstReverse2(str: string) : string {
    return str.split('').reverse().join('');
}
console.log(firstReverse2('hello'));