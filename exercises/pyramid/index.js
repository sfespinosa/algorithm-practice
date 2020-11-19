// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// with recursion
function pyramid(n, row = 0, column = 0, level = '') {
    let midpoint = n - 1
    let length = n * 2 - 1
    if (n === row) {
        return
    }

    if (length === level.length) {
        console.log(level)
        level = ''
        column = 0
        row++
    } else if (column < midpoint-row || column > midpoint + row){ 
        level+= ' '
        column++
    } else {
        level += '#'
        column++
    }

    pyramid(n, row, column, level)
}

// function pyramid(n) {
//     my solution
//     let length = n * 2 -1
//     let stringArr = []
//     while (stringArr.length !== length) {
//         stringArr.push(' ')
//     }
//     let midpoint = n - 1
//     let step = 1
//     stringArr[midpoint] = '#'
//     while (step <= n) {
//         console.log(stringArr.join(''))
//         stringArr[midpoint + step] = '#'
//         stringArr[midpoint - step] = '#'
//         step++
//     }
// }

module.exports = pyramid;
