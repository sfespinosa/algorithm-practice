// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // MY SOLUTION
    let start = 0
    let end = str.length - 1
    let pal = true
    while (start < end && pal) {
        if (str[start] !== str[end]) {
            pal = false
        }
        start++
        end--
    }
    return pal

    // REVERSE THE STRING AND COMPARE
    // const reversed = str.split('').reverse().join('')
    // return reversed === str

    // USE .every()
    // return str.split('').every((char, i) => char === str[str.length - i -1])

}

module.exports = palindrome;
