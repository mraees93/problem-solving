/* For this challenge you will transform a string using the Caesar Cipher.
have the function CaesarCipher(str,num) take the str parameter and perform a 
Caesar Cipher shift on it using the num parameter as the shifting number. A 
Caesar Cipher works by shifting each letter in the string N places down in 
the alphabet (in this case N will be num). Punctuation, spaces, and capitalization 
should remain intact. For example if the string is "Caesar Cipher" and num is 2 the 
output should be "Ecguct Ekrjgt". 
*/

function CaesarCipher(str: string, num: number): string {
    //let output = ""
    //for(let i = 0; i < str.length; i++) {
    const rec = (i: number, output: string = "") => {
        if (i === str.length) return output;

        const code = str.charCodeAt(i) + num
        const translation = String.fromCharCode(code)

        if (/[a-zA-Z]/.test(str[i])) {
            output += translation
        } else {
            output += str[i]
        }
        return rec(i + 1, output)
    }
    //}
    return rec(0)
}
// console.log(CaesarCipher("Caesar Cipher", 2)); //"Ecguct Ekrjgt"
// console.log(CaesarCipher("abc", 0)); // abc
// console.log(CaesarCipher("Hello", 4)); // Lipps