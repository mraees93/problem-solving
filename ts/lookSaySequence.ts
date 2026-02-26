
/* For this challenge you will determine the next number in a sequence.
have the function LookSaySequence(num) take the num parameter being passed and return the next 
number in the sequence according to the following rule: to generate the next number in a sequence 
read off the digits of the given number, counting the number of digits in groups of the same digit. 
For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there 
being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program 
should return the next number in the sequence given num. 
*/

function LookSaySequence(num: number): string {
    const str = num.toString()
    let numStr = str[0]
    let result = ""

    for (let i = 1; i <= str.length; i++) {
        if (str[i] !== numStr[0]) {
            result += numStr.length + numStr[0]
            numStr = str[i]
        } else {
            numStr += str[i]
        }
    }
    return result
}
// console.log(LookSaySequence(1211)); // 111221
// console.log(LookSaySequence(2466)); // 121426
// console.log(LookSaySequence(111221)); // 312211