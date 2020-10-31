// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // MY SOLUTION
    // if (n === 0) return 0
    // numStr = Math.abs(n).toString()
    // numStr = parseInt(numStr.split('').reverse().join(''))
    // return Math.sign(n) === 1 ? numStr : (numStr * -1)

    // Math.sign() solution
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;
