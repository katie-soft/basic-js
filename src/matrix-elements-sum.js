const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  let result = 0;
  let i = 0;
  let e = 0;
  for (e; e < array[i].length; e++) {
    for (i; i < array.length; i++) {
      result += array[i][e];
      if (array[i][e] === 0) {
        break;
      }
    }
    i = 0;
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
