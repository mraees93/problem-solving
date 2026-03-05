// For this challenge you will determine if two characters are separated a specific way in the string.
//  take the str parameter being passed and return the string true if the characters a and b are separated
//  by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true 
// because there is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str: string) : boolean {
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if((str[i] === 'a' && str[i + 3] === 'b') || (str[i] === 'b' && str[i + 3] === 'a')) {
            return true;
        }
    }
    return false;
}

console.log(ABCheck("lane borrowed")) // true
console.log(ABCheck("after badly")) // false
console.log(ABCheck("Laura sobs")) // true
console.log(ABCheck("hello this is birdad yeah typos")) // true
console.log(ABCheck("dogs are awesome")) // false