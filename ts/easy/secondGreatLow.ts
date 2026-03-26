// For this challenge you will determine the second lowest and greatest numbers in an array.
// have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second 
// greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should 
// be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 


function SecondGreatLow(arr: number[]) : string {
    arr = [...new Set(arr.sort((num1, num2)  => num1 - num2))];

    if(arr.length > 2) return `${arr[1]} ${arr.at(-1)}`

    return `${arr[0]} ${arr[1]}`
}
console.log(SecondGreatLow([7, 7, 12, 98, 106]));


function SecondGreatLow2(arr: number[]) : string {
    arr = [...new Set(arr.sort((num1, num2)  => num1 - num2))];

    return arr.length > 2 ? `${arr[1]} ${arr.at(-1)}` : `${arr[0]} ${arr[1]}`
}
console.log(SecondGreatLow2([7, 7, 12, 98, 106]));