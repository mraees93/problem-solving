/*
For this challenge you will determine how to order an array of numbers consecutively.
have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of 
integers needed to make the contents of arr consecutive from the lowest number to the highest number. 
For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to 
the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as 
parameters and no array will have less than 2 elements. 
*/

function Consecutive(arr: number[]): number {
    arr.sort((a, b) => a - b)

    const start = arr[0]
    const end = arr.at(-1)
    const missingNumbers: number[] = []

    for (let i = start; i <= end!; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i)
        }
    }

    return missingNumbers.length
}
// console.log(Consecutive([4, 8, 6])) // 2 coz 5 and 7
// console.log(Consecutive([-2, 10, 4]))
// console.log(Consecutive([5, 10, 15])) 