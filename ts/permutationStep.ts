// For this challenge you will determine the next greatest number using the same numbers of a given argument.
// have the function PermutationStep(num) take the num parameter being passed and return the next number 
// greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. 
// If a number has no greater permutations, return -1 (ie. 999). 

function PermutationStep(num: number): number {
    const arr: number[] = num.toString().split("").map(Number);
    const result: number[][] = [];

    function recursive(currentArr: number[], start: number) {
        if (start === currentArr.length - 1) {
            result.push([...currentArr]);
            return;
        }
        for (let i = start; i < currentArr.length; i++) {
            console.log('before swap', currentArr, start, i);
            // Swap
            [currentArr[start], currentArr[i]] = [currentArr[i], currentArr[start]];
            // Recurse
            console.log('after swap', currentArr, start, i);

            recursive(currentArr, start + 1);
            // Backtrack (Swap back)
            [currentArr[start], currentArr[i]] = [currentArr[i], currentArr[start]];
        }
    }

    recursive(arr, 0);
    const permutations = result.map(arr => Number(arr.join("")))
        .sort((a, b) => a - b)
        .filter(n => n > num)

    return !permutations.length ? -1 : permutations[0]
}

//console.log(PermutationStep(123)); // 132
// console.log(PermutationStep(12453)); // 12534
// console.log(PermutationStep(987)); // -1 (no larger permutation)