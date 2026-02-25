// For this challenge you will attempt to modify a word and then find it within a dictionary.
/*
have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will 
contain 2 elements: the first element will be a sequence of characters representing a word, and the 
second element will be a long string of comma-separated words, in alphabetical order, that represents 
a dictionary of some arbitrary length. For example: strArr can be: ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. 
Your goal is to determine the minimum number of characters, if any, can be removed from the word so that it matches one of the 
words from the dictionary. In this case, your program should return 2 because once you remove the characters "c" and "e" you are 
left with "world" and that exists within the dictionary. If the word cannot be found no matter what characters are removed, 
return -1.
*/

function CharacterRemoval(strArr: string[]) {
    const word: string = strArr[0];
    const words: string[] = strArr[1].split(",");
    let removedCharsCount: number[] = [];
    for (let i = 0; i < words.length; i++) {
        let wordCopy = word;
        for (let j = 0; j < words[i].length; j++) {
            if (wordCopy.includes(words[i][j])) {
                wordCopy = wordCopy.replace(words[i][j], "");
                removedCharsCount.push(wordCopy.length);
            }
        }
    }
    return removedCharsCount.length ? Math.min(...removedCharsCount) : -1;
}
// console.log(CharacterRemoval(["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"])); //2
// console.log(CharacterRemoval(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])); //4
// console.log(CharacterRemoval(["abcdefabcdef", "a,b,bfabcde,c,d,e,ee,eee,eeee,eeeeeeeee,fabc,go,goo,gooo"])); //5
// console.log(CharacterRemoval(["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])); //8

function CharacterRemoval(strArr: string[]): number {
    const targetWord = strArr[0];
    const dictionary = strArr[1].split(",");
    
    // We want the smallest number of removals, so start with the largest possible number
    let minRemovals = Infinity;

    // One loop to iterate through each word in the dictionary
    for (const dictWord of dictionary) {
        if (isSubsequence(dictWord, targetWord)) {
            // The number of removals is simply the difference in lengths
            const removals = targetWord.length - dictWord.length;
            if (removals < minRemovals) {
                minRemovals = removals;
            }
        }
    }

    return minRemovals === Infinity ? -1 : minRemovals;
}
// console.log(CharacterRemoval(["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"])); //2

// Efficient O(N) check: Is 'sub' a subsequence of 'full'?
function isSubsequence(sub: string, full: string): boolean {
    let subIdx = 0;
    let fullIdx = 0;

    while (subIdx < sub.length && fullIdx < full.length) {
        if (sub[subIdx] === full[fullIdx]) {
            subIdx++;
        }
        fullIdx++;
    }
    // If we matched all characters in 'sub', it's a valid subsequence
    return subIdx === sub.length;
}

