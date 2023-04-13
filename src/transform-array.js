const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(initArr) {
  if (!Array.isArray(initArr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let newArr = initArr.reduce((arr, el, index) => {
      if (typeof el === '--double-next') {
        return [...arr, initArr[index + 1]]
      }
      if (typeof el === '--double-prev') {
        return [...arr, initArr[index - 1]]
      }
      return [...arr, el];
    }, [])
    return newArr;
  }
}

module.exports = {
  transform
};
