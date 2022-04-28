const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let arr = []
  let resultObj = {}
  domains.forEach(element => {
    arr.push(element.split('.').reverse())
  });

  arr.forEach(element => {
    let tmpStr = ''
    element.forEach(cell => {
      if (resultObj.hasOwnProperty(tmpStr = tmpStr + '.' + cell)) {
        resultObj[tmpStr] += 1
      } else {
        resultObj[tmpStr] = 1
      }
    });
  });
  return resultObj
}

module.exports = {
  getDNSStats
};
