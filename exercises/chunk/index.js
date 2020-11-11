// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // my solution
    // let chunkedArray = []
    // while (array.length > 0) {
    //     if (array.length >= size) {
    //         chunkedArray.push(array.splice(0,size))
    //     } else {
    //         chunkedArray.push(array.splice(0, array.length))
    //     }
    // }
    // return chunkedArray

    // solution provided
    // const chunked = []
    // for (let num of array) {
    //     if (chunked.length === 0 || chunked[chunked.length-1].length === size) {
    //         chunked.push([num])
    //     } else {
    //         chunked[chunked.length-1].push(num)
    //     }
    // }
    // console.log(chunked, array, size)
    // return chunked

    // using slice
    const chunked = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked
}

module.exports = chunk;
