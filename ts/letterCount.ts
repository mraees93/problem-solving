// get the first word with most repeated chars else -1
// console.log(LetterCountI("hello apple pie"));
// console.log(LetterCountI("no words")); -1
// console.log(LetterCountI("bb ccc"));

function LetterCount(str: string) : string | number {
    const words = str.split(", ");
    const wordObj: Record<string, number> = {};
    for(let i = 0 ; i < words.length; i++) {
        const obj: Record<string, number> = {};
        for(let j = 0; j < words[i].length; j++) {
            if(!obj[words[i][j]]) obj[words[i][j]] = 1;
            else obj[words[i][j]]++
        }
        const repeated = Object.keys(obj).filter(key => obj[key] > 1).reduce((curr, v) => curr + v, 0);
        console.log(repeated);
        
    }
}
console.log(LetterCount("hello apple pie")); // hello
