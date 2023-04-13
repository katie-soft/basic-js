const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/*num*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*
  let arr = Array.from(String(num), Number);
  let skip = arr[0];
  
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] > skip ? skip = arr[i] : skip
  }
  return skip;

  //let arr = Array.from(String(num), Number);
  //return Number(Array.from(String(num), Number).sort((a, b) => b - a).join('').slice(0, -1));*/
}

module.exports = {
  deleteDigit
};
