// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // my solution - building character map
    // stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    // stringB = stringB.replace(/[^\w]/g, "").toLowerCase()
    // aMap = {}
    // bMap = {}
    // if (stringA.length !== stringB.length) {
    //     return false
    // } else {
    //     for (let char of stringA) {
    //         if (aMap[char]) {
    //             aMap[char] = aMap[char] + 1
    //         } else {
    //             aMap[char] = 1
    //         }
    //     }

    //     for (let char of stringB) {
    //         if (bMap[char]) {
    //             bMap[char] = bMap[char] + 1
    //         } else {
    //             bMap[char] = 1
    //         }
    //     }
    // }

    // if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    //     return false
    // } else {
    //     for (let key in aMap) {
    //         if (aMap[key] !== bMap[key]) {
    //             return false
    //         }
    //     }
    // }

    // return true

    // separating into array and sorting
    const clearStr = str => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }

    return clearStr(stringA) === clearStr(stringB)
}

module.exports = anagrams;
