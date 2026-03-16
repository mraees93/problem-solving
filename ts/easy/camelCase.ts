// For this challenge you will be converting a string into camel case format.
/*
have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format 
where the first letter of each word is capitalized (excluding the first letter). The string will only contain 
letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
*/

function CamelCase(str: string) : string {
    const words = str.toLowerCase().split(/[^a-zA-Z0-9]+/);
    const firstWord = words.at(0);
    const restOfWords = words.map((word) => word[0].toUpperCase() + word.slice(1)).slice(1);

    return firstWord + restOfWords.join("");
}
console.log(CamelCase("BOB loves-coding"));
