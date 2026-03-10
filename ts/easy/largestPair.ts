//  For this challenge you will determine the largest double digit number.
// have the function LargestPair(num) take the num parameter being passed and determine the largest double 
// digit number within the whole number. For example: if num is 4759472 then your program should return 94 
// because that is the largest double digit number. The input will always contain at least two positive digits. 

function LargestPair(num: number) : number {
    const strNum = num.toString();
    let twoNums = Number(strNum[0] + strNum[1]);

    for(let i = 1; i < strNum.length; i++) {
        const nextTwo = Number(strNum.slice(i, i + 2));
        if(nextTwo > twoNums) twoNums = nextTwo;
    }

    return twoNums;
}
console.log(LargestPair(4759472)); // 94
console.log(LargestPair(453857)); // 85
console.log(LargestPair(363223311)); // 63
console.log(LargestPair(5673536634)); // 73 