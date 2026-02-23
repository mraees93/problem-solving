/* For this challenge you will divide two numbers and print them in a certain format.
have the function FormattedDivision(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas and 
4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 
10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero. 
*/

function FormattedDivision(num1: number, num2: number): string {
    const fixedNum = Number(num1 / num2).toFixed(4)

    return fixedNum
}
// console.log(FormattedDivision(123456789, 10000)) //12345.6789
// console.log(FormattedDivision(10, 10)) // 1.0000