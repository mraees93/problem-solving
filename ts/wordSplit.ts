// For this challenge you will attempt to split a long string of characters into actual words.
/*
have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: 
the first element will be a sequence of characters, and the second element will be a long string of comma-separated 
words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be: 
["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]. Your goal is to determine if the first element in the input 
can be split into two words, where both words exist in the dictionary that is provided in the second input. In this 
example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.

Your program should return the two words that exist in the dictionary separated by a comma. So for the example above, 
your program should return hello,cat. There will only be one correct way to split the first element of characters into 
two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. 
The first element itself will never exist in the dictionary as a real word.
*/

// function WordSplit(strArr: string[]) {
//     const word: string = strArr[0]
//     const dictionary: string[] = strArr[1].split(",")
//     const result = []
    
//     for(let i = 0; i < dictionary.length; i++) {
//         const splitWord = word.split(dictionary[i]).join("")
//         if(dictionary.includes(splitWord)) {
//             if(word.indexOf(dictionary[i]) > word.indexOf(splitWord)) {
//                 result[0] = splitWord;
//             } else {
//                 result[1] = splitWord
//             }
//         }
//     }
//     return result.length === 0 ? 'Not possible' : result.join(",")
// }
// console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
// console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));
// console.log(WordSplit(["test", "t,ab,abc,abcg,b,c,dog,e,efd,zzzz"]));
// console.log(WordSplit(["az", "a,b,c,d,e,f,farm,g,goal,hello,world,x,y,z,zzzz"]));

function WordSplit(strArr: string[]) {
    const word: string = strArr[0];
    const dictionary: Set<string> = new Set(strArr[1].split(","));
    
    for(let i = 1; i < word.length; i++) {
        const firstWord = word.slice(0, i);
        const secondWord = word.slice(i);
        if(dictionary.has(firstWord) && dictionary.has(secondWord)) {
            return [firstWord, secondWord].join(",");
        }
    }
    return -1;
}
console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));
console.log(WordSplit(["test", "t,ab,abc,abcg,b,c,dog,e,efd,zzzz"]));
console.log(WordSplit(["az", "a,b,c,d,e,f,farm,g,goal,hello,world,x,y,z,zzzz"]));