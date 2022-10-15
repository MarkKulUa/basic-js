const {NotImplementedError} = require('../extensions/index.js');

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
    let a2 = s2.split(''),
        resultCounter = 0,
        arr1Counters = s1.split('').reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {})

    for (let i in arr1Counters) {

        let tmpCnt = a2.filter(item => item === i).length;

        if (arr1Counters[i] > tmpCnt) {
            resultCounter += tmpCnt;
        } else {
            resultCounter += arr1Counters[i];
        }
    }

    return resultCounter;
}

module.exports = {
    getCommonCharacterCount
};
