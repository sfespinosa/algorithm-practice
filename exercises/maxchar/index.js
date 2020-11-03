// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = new Map()
    for (let char of str){
        if (chars.has(char)){
            chars.set(char, chars.get(char) + 1)
        } else {
            chars.set(char, 1)
        }
    }
    
    let max = 0
    let maxKey
    chars.forEach((value, key) => {
        if (value > max) {
            max = value
            maxKey = key
        }
    })
    return maxKey
}

maxChar('abcc')
module.exports = maxChar;
