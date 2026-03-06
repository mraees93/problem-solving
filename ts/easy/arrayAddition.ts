// For this challenge you will determine if numbers in an array can add up to a certain number in the array.
// take the array of numbers stored in arr and return the string true if any combination of numbers in the 
// array can be added up to equal the largest number in the array, otherwise return the string false. For 
// example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function arrayAddition(nums: number[]) : boolean {
    nums = nums.sort((a, b) => a - b);
    let total: number = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        total = total + nums[i]
        console.log(total, nums.at(-1));
        
        if(total === nums.at(-1)) return true;
    }

    return false;
}
console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([3, 5, -1, 8, 12]));
// console.log(arrayAddition([4, 6, 23, 10, 1, 3]));
// console.log(arrayAddition([10, 12, 500, 1, -5, 1, 0]));
