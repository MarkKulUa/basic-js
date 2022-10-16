const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr === undefined || !arr || !Array.isArray(arr)) {
      return 0;
    }

    return this.calcIterator(arr)
  }

  calcIterator(arr) {
    let self = this;
    return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
      return Math.max(max, self.calcIterator(item));
    }, 0) : -1);
  }
}

const depthCalc = new DepthCalculator();
console.log(
depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]]) //=> 1
)
//
// console.log(
// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) //=> 2
// )
//
// console.log(
// depthCalc.calculateDepth([[[]]]) //=> 3
// )



// console.log(
//     [1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]
// )
module.exports = {
  DepthCalculator
};
