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
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let arr = n.toString().split('')
  let nums = []
  let tmpArr = []
  for (let i = 0; i < arr.length; i++) {
    tmpArr = arr.slice()
    tmpArr.splice(i, 1)
    nums.push(+tmpArr.join(''))
  }
  return Math.max(...nums)  
}

module.exports = {
  deleteDigit
};
