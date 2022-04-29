const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
/*class VigenereCipheringMachine {
  encrypt(string, key) {
    //throw new NotImplementedError('Not implemented');
    
  }
  decrypt(string, key) {
    //throw new NotImplementedError('Not implemented');
    
  }
}*/

class VigenereCipheringMachine {
  #typeOfMachine
  #codeTable = []
  #codeString = ''

  constructor() {
    if (arguments.length === 0) {
      this.#typeOfMachine = true
    } else {
      this.#typeOfMachine = arguments[0]
    }
    this.#createCodeTable()
  }
  get type() {
    return this.#typeOfMachine
  }

  #createCodeTable() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < 26; i++) {
      let row = str.split('')
      let elements = row.splice(0, i)
      this.#codeTable.push(row.concat(elements))
    }
  }

  #createCodeString(sourceString, keyString) {
  this.#codeString = keyString.toUpperCase()
  while(this.#codeString.length < sourceString.length) {
      this.#codeString += this.#codeString
    }
    this.#codeString = this.#codeString.split('').splice(0, sourceString.length).join('')
  }

  get codeTable() {
    return this.#codeTable
  }
  
  get codeString() {
    return this.#codeString
  }

  encrypt(srcString, srcKey) {
    //throw new NotImplementedError('Not implemented');
    if (srcString === undefined || srcKey === undefined) {
      throw new Error ('Incorrect arguments!')
    }   
    let resultStr = ''
    this.#createCodeString(srcString, srcKey)
    let srcArr = srcString.toUpperCase().split('')
    let j = 0
    for (let i = 0; i < srcArr.length; i++) {
      if (this.#codeTable[0].indexOf(srcArr[i]) === -1) {
        resultStr += srcArr[i]
      } else {
        let column = this.#codeTable[0].indexOf(srcArr[i])
        let row = this.#codeTable[0].indexOf( this.#codeString[j])
        resultStr += this.#codeTable[row][column]       
        j++
        if(j === this.#codeString.length) j=0
      }
    }
    if(this.#typeOfMachine)
      return resultStr
    else  
      return resultStr.split('').reverse().join('')
  }
  decrypt(srcString, srcKey) {
    //throw new NotImplementedError('Not implemented');
    if (srcString === undefined || srcKey === undefined) {
      throw new Error ('Incorrect arguments!')
    }    
    let resultStr = ''
    this.#createCodeString(srcString, srcKey)
    let srcArr = srcString.toUpperCase().split('')
    let j = 0    
    for (let i = 0; i < srcArr.length; i++) { 
      if (this.#codeTable[0].indexOf(srcArr[i]) === -1) {
        resultStr += srcArr[i]
      } else {
        let row = this.#codeTable[0].indexOf(this.#codeString[j])
        let indexEl = this.#codeTable[row].indexOf(srcArr[i])
        resultStr += this.#codeTable[0][indexEl]
        j++
        if(j === this.#codeString.length) j=0
      }  
    }
    if(this.#typeOfMachine)
      return resultStr
    else  
      return resultStr.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
