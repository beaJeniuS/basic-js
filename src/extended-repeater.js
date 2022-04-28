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
  //throw new NotImplementedError('Not implemented');
  let separator = options.hasOwnProperty('separator') ? String(options['separator']) : '+'
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options['additionSeparator']) : '|'
  let resStr = String(str)
  let resAddStr = options.hasOwnProperty('addition') ? String(options['addition']) : ''
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? Number(options['repeatTimes']) : 1
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? Number(options['additionRepeatTimes']) : 1
  let resultStr = ''
  
  for (let i = 1; i <= repeatTimes; i++) {
    resultStr += resStr
    for (let j = 1; j <= additionRepeatTimes; j++) {
      resultStr += resAddStr
      if(j !== additionRepeatTimes) resultStr += additionSeparator
    }
    if(i !== repeatTimes) resultStr += separator
  }
  return resultStr  
}

module.exports = {
  repeater
};
