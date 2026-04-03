// For this challenge you will determine the second lowest and greatest numbers in an array.
// have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second 
// greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should 
// be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr: number[]) : string {
    const ascendingNumbers: number[] = [...new Set(arr)].sort((a, b) => a - b);
    console.log(ascendingNumbers);
    
    const max: number | undefined = ascendingNumbers.at(-1);
    let secondLowest: number | undefined = ascendingNumbers.at(1);
    if(arr.length > 2) {
        return `${secondLowest} ${max}`;
    } else {
        return `${arr[0]} ${max}`
    }
}
console.log(SecondGreatLow([7, 7, 12, 98, 106]));
console.log(SecondGreatLow([98, 106]));
