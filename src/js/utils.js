/**
 * General Utils
**/

const utils = module.exports = {
  forEach (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  },
  match (a, b) {
    if (a === b) {
      return true;
    } else {
      return false
    }
  },
  sort (a, b) {
    return a - b;
  },
  winningCombos: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
}
