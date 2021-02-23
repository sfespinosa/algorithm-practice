// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // my results
  // const results = [1]
  // let currentLevel = [root]
  // let nextLevel = []
  // while (currentLevel.length){
  //   const node = currentLevel.shift()
  //   if (node.children.length) nextLevel.push(...node.children)

  //   if (!currentLevel.length && nextLevel.length) {
  //     results.push(nextLevel.length)
  //     currentLevel = [...nextLevel]
  //     nextLevel = []
  //   }
  // }
  // return results

  const counter = [0]
  const arr = [root, 'stop']
  while (arr.length > 1) {
    const current = arr.shift();
    if (current === 'stop') {
      counter.push(0)
      arr.push(current)
    } else {
      counter[counter.length - 1]++
      arr.push(...current.children)
    }
  }
  return counter
}

module.exports = levelWidth;
