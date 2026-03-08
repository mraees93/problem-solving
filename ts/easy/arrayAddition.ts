// For this challenge you will determine if numbers in an array can add up to a certain number in the array.
// take the array of numbers stored in arr and return the string true if any combination of numbers in the 
// array can be added up to equal the largest number in the array, otherwise return the string false. For 
// example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function arrayAddition(nums: number[]) : boolean {
    nums = nums.sort((a, b) => a - b);
    const max = nums.at(-1);
    nums = nums.slice(0, -1);
    let total: number = 0;

    for(let i = 1; i < nums.length; i++) {
       //remove num from array with slice + slice
       const arr = nums.slice(0, i).concat(nums.slice(i + 1))

       const total = arr.reduce((curr, tot) => curr + tot, 0);

       //if more than then remove another number from array, case 2 is more
        if(total > max) {
            //check how 3 needs to be removed
            //maybe make the initial loop a recursive function
        }
       //add another condition
    }
}
console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([3, 5, -1, 8, 12]));
// console.log(arrayAddition([4, 6, 23, 10, 1, 3]));
// console.log(arrayAddition([10, 12, 500, 1, -5, 1, 0]));
