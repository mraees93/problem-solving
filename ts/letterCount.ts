// get the first word with most repeated chars else -1
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words")); -1
// console.log(LetterCountI("bb ccc"));

function LetterCount(str: string) : string | number {
    const words = str.split(" ");
    let max: [string, number] = ['', -1];
    for(let i = 0 ; i < words.length; i++) {
        const obj: Record<string, number> = {};
        for(let j = 0; j < words[i].length; j++) {
            if(!obj[words[i][j]]) obj[words[i][j]] = 1;
            else obj[words[i][j]]++
        }
        
        const repeated = Object.values(obj).filter(val => val > 1);
        if(repeated[0] > max[1]) max = [words[i], repeated[0]]
    }

    return max[0] === '' ? max[1] : max[0];
}
console.log(LetterCount("hello apple pie")); // hello
console.log(LetterCount("no words")); -1
console.log(LetterCount("bb ccc"));