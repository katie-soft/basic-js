const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.counter = 1;
  };

  calculateDepth(arr) {
    this.checkArr(arr);
    return this.counter;
  }

  checkArr(input) {
    input.forEach(el => {
      if (Array.isArray(el)) {
        this.counter++;
      }
    })
  }
}

module.exports = {
  DepthCalculator
};
