// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // my solution
  if (n === 1) return 1
  if (n === 2) return 1
  let count = 2
  let prev = 1
  let current = 1
  while (count !== n) {
    count++
    let next = prev + current
    prev = current
    current = next
  }
  return current

  // iterative solution
}

module.exports = fib;
