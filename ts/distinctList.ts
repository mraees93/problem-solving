/* For this challenge you will remove duplicate elements from an array.
have the function DistinctList(arr) take the array of numbers stored in arr and determine 
the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your 
program should output 2 because there are two duplicates of one of the elements. */


function DistinctList(arr: number[]) {
    return arr.length - new Set([...arr]).size
}
//console.log(DistinctList([1, 2, 2, 2, 3]));