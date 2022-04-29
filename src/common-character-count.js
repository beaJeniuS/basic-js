const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let obj1 = {}
  let obj2 = {}

  for(let i=0;i<arr1.length;i++) {
    if(obj1.hasOwnProperty(arr1[i])) {
      obj1[arr1[i]] += 1
    } else {
      obj1[arr1[i]] = 1
    }
  }

  for(let i=0;i<arr2.length;i++) {
    if(obj1.hasOwnProperty(arr2[i])) {
      if(obj2.hasOwnProperty(arr2[i])) {
        obj2[arr2[i]] += 1
      } else {
        obj2[arr2[i]] = 1
      }
    }
  }

  let sum = 0
  for(key in obj2) {
    sum += Math.min(obj1[key], obj2[key])
  }
  return sum
}

module.exports = {
  getCommonCharacterCount
};
