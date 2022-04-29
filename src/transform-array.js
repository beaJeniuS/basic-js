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
function transform(arr) {
//  throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
    //return
  }

  let innerArr = arr.slice()
  let resultArr = []
  for(let i = 0;i < innerArr.length;i++) {
    switch(innerArr[i]) {
      case '--discard-next' :
        if (i + 1 < arr.length) {
          innerArr[i + 1] = 'discarded'
          i += 1
        }
        break
      case '--discard-prev' :
        if(i - 1 >= 0) {
          if(innerArr[i - 1] !== 'discarded') {
            resultArr.pop()
          }
        }
        break
      case '--double-next':
        if (i + 1 < innerArr.length) {
          resultArr.push(innerArr[i + 1])
        }
        break
      case '--double-prev' :
        if(i - 1 >= 0) {
          if(innerArr[i - 1] !== 'discarded') {
            resultArr.push(innerArr[i - 1])
          }
        }
        break
        default: resultArr.push(innerArr[i])
        break
    }
  }
  return resultArr  
}

module.exports = {
  transform
};
