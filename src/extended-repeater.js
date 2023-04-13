const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let { addition = '', separator = '+', additionSeparator = '|', repeatTimes, additionRepeatTimes } = options;
  if (typeof str === 'boolean') { str = str.toString() };
  if (str === null) { str = 'null' };

  let resultAdd = str;
  let i = 0;
  while (i < additionRepeatTimes - 1) {
    resultAdd += addition;
    resultAdd += additionSeparator;
    i++;
  }
  let resultLine = resultAdd + addition;
  let result = resultLine;
  i = 0;
  while (i < repeatTimes - 1) {
    result += separator
    result += resultLine;
    i++;
  }
  return result;
}

module.exports = {
  repeater
};
