const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.chain.length
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if (isNaN(position)) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    } else {
      if (position <= 0) {
        this.chain = []
        throw new Error('You can\'t remove incorrect link!')
      }
      if (position >= this.chain.length) {
        this.chain = []
        throw new Error('You can\'t remove incorrect link!')        
      }
      this.chain.splice(position - 1, 1)
    }
    return this
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chain.reverse()
    return this
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let result = '( ' + this.chain.slice().join(' )~~( ') + ' )'
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
