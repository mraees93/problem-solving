// For this challenge you will determine if two numbers can be multiplied to some specific number.
/*
have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers 
can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the 
string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling 
it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string 
true.
*/

function SumMultiplier(numbers: number[]) : boolean {
    const sum: number = numbers.reduce((total, curr) => total + curr, 0);
    const doubledSum: number = sum * 2;

    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) continue;
            const multipliedNums = numbers[i] * numbers[j];
            if(multipliedNums > doubledSum) {
                return true;
            }
        }
    }

    return false;
}
//console.log(SumMultiplier([2, 5, 6, -6, 16, 2, 3, 6, 5, 3]));


