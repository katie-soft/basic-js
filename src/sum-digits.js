const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let result = Array.from(String(num), Number);
  while (result.length > 1) {
    let sum = result.reduce((acc, el) => {
      return acc + el
    }, 0)
    result = Array.from(String(sum), Number);
  }
  return result[0];
}

module.exports = {
  getSumOfDigits
};
