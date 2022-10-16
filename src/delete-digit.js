const {NotImplementedError} = require('../extensions/index.js');

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
    if (!Number.isInteger(n)) {
        return NaN;
    }

    let arr = n.toString().split(''),
        max = 0;

    for (let i = 0; i < arr.length; i++) {
        let value = parseInt(arr.filter((item, index, arr) => index !== i).join(''));
        if (value > max) {
            max = value;
        }
    }

    return (max);
}

module.exports = {
    deleteDigit
};
