// For this challenge you will determine if there is a number that appears consecutively in both arguments.
// have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a 
// straight triple of a number at any place in num1 and also a straight double of the same number in num2. For 
// example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter 
// you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. 
// If this isn't the case, return 0. 

function TripleDouble(num1: number | string, num2: number | string): number {
    num1 = num1.toString()
    num2 = String(num2)
    for (let i = 0; i < num1.length; i++) {
        const triple = num1[i].repeat(3)
        const double = triple.slice(0, 2)

        if (num1.includes(triple) && num2.includes(double)) {
            return 1
        }
    }
    return 0
}
// console.log(TripleDouble(451999277, 41177722899)) //1
// console.log(TripleDouble(67844, 66237)) //0
//console.log(TripleDouble(465555,5579)) //1