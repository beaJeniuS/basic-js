const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  if(str.length === 0) return ''
  let arr = str.match(/(.)\1*/g)
  let arrRes = []
  arr.forEach(element => {
    arrRes.push((element.length > 1 ? element.length : '') + element[0])
  });
  return arrRes.join('') 
}

module.exports = {
  encodeLine
};
