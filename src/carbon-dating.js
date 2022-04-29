const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  if (isNaN(sampleActivity)) return false
  if (typeof sampleActivity !== 'string') return false
  
  let num = Number(sampleActivity)
  if(num > MODERN_ACTIVITY) return false
  if (num <= 0) return false
  
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD))
  return t
}

module.exports = {
  dateSample
};
