const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

function MyString(val) {
  if (arguments.length === 0) {
    return "";
  } else if (typeof val === "undefined") {
    return "undefined";
  } else if (val === null) {
    return "null";
  } else if (typeof val === "boolean") {
    return val ? "true" : "false";
  } else if (typeof val === "number") {
    // super complex rules
  } else if (typeof val === "string") {
    return val;
  }

  return val;
}

let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {

    if (value === undefined ) {
      chain.push('( )')
    } else {
      chain.push('( ' + MyString(value) + ' )')
    }

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !chain[position] || position <= -1) {
      chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    chain.splice(position-1, 1);

    return this;
  },
  reverseChain() {
    chain.reverse()
   return this;
  },
  finishChain() {
    let tmp = chain;
    chain = [];
    return tmp.join('~~');
  }
};

// console.log(
//     chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
// //     // chainMaker.addLink(1).addLink/(2).addLink(3).removeLink(0)
// //     // chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')
// //     // chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)
// //     // chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
// //     chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()
// );
module.exports = {
  chainMaker
};
