const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  if(names.length === 0) return []
  let arr = []

  function getFileName(name, index) {
    if (arr.indexOf(`${name}` + ((index === 0) ? '' : `(${index})`)) == -1) {
      arr.push(`${name}` + ((index === 0) ? '' : `(${index})`))
    }
    else {
      getFileName(name, index + 1)
    }
  }
  
  for (let i = 0; i < names.length; i++) {
    getFileName(names[i],0)
  }

  return arr 
}

module.exports = {
  renameFiles
};
