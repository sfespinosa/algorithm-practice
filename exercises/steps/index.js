// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my solution
// function steps(n) {
//     let count = 1
//     while (count <= n) {
//         let log = ''
//         for (let i = 1; i < count + 1; i++) {
//             log = log + '#'
//         }
//         for (let j = 1; j < n - count + 1; j++) {
//             log = log + ' '
//         }

//         console.log(log)
//         count++
//     }
// }

// with recursion
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return
    }

    if (n === stair.length) {
        console.log(stair)
        stair = ''
        row++
    } else if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }

    steps(n, row, stair)
}
module.exports = steps;
