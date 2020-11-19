// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // my solution. is it faster?
    // let count = 0
    // let start = 0
    // let end = str.length - 1
    // while (start <= end) {
    //     if (start === end) {
    //         end = 0
    //     }

    //     if (['a', 'e', 'i', 'o', 'u'].includes((str[start].toLowerCase()))) {
    //         count++
    //     }

    //     if (['a', 'e', 'i', 'o', 'u'].includes((str[end].toLowerCase())) && end !== 0) {
    //         count++
    //     }

    //     start++
    //     end--
    // }
    // return count

    let count = 0
    let vowels = 'aeiou'
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            count++
        }
    }
    return count
}

module.exports = vowels;
