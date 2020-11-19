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

function pyramid(n) {
    let length = n * 2 -1
    let stringArr = []
    while (stringArr.length !== length) {
        stringArr.push(' ')
    }
    let midpoint = n - 1
    let step = 1
    stringArr[midpoint] = '#'
    while (step <= n) {
        console.log(stringArr.join(''))
        stringArr[midpoint + step] = '#'
        stringArr[midpoint - step] = '#'
        step++
    }
}

module.exports = pyramid;
