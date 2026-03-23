/* For this challenge you will be determining the multiples of a specific number.
have the function ThreeFiveMultiples(num) return the sum of all the multiples of 
3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 
that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program 
should return 23. The integer being passed will be between 1 and 100. 
*/

function ThreeFiveMultiples(num: number) : number {
    const arr = []
    let total = 0
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
            total += i
        }
    }
    console.log(total)
    return arr.reduce((prev, curr) => prev + curr, 0)
}
//console.log(ThreeFiveMultiples(10));