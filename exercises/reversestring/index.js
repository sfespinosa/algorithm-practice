// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let strArr = str.split('')
    // let start = 0
    // let end = str.length - 1
    // while (start < end) {
    //     let temp = strArr[start]
    //     strArr[start] = strArr[end]
    //     strArr[end] = temp
    //     start++
    //     end--
    // }
    // return strArr.join('')

    // using .reverse()
    // return str.split('').reverse().join('')

    // using for...of loops
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed
    // }
    // return reversed

    // using .reduce()
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
