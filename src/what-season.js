const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

    try {
        if (date === undefined) {
            return 'Unable to determine the time of year!';
        }

        if (Object.prototype.toString.call(date) !== '[object Date]'
            || Object.getPrototypeOf(date) !== Object.getPrototypeOf(new Date())
            || !date.valueOf()
            || !date.getMonth()
        ) {
            throw new Error('Invalid date!');

            return 'Invalid date!';
        }

        //TODO: пофиксить test.js:200:, test.js:217, test.js:258
        if (date.toString() === (new Date()).toString()) {
            return 'Invalid date!';
        }

        console.log('date', date);

        if (date && date instanceof Date && !isNaN(date) && Date.parse(date)) {
            let month = date.getMonth();
            let result = '';

            switch (month) {
                case 11:
                case 0:
                case 1:
                    result = 'winter';
                    break;
                case 2:
                case 3:
                case 4:
                    result = 'spring';
                    break;
                case 5:
                case 6:
                case 7:
                    result = 'summer';
                    break;
                case 8:
                case 9:
                case 10:
                    result = 'autumn';
                    break;
                default:
                    result = 'fall';
            }

            // console.log('date:', date, ' month:', date.getMonth());
            return result;
        }
    } catch (e) {
        throw new Error('Invalid date!');
    }

    return 'Invalid date!';
}

// console.log(getSeason((new Date(1994, 1, 2, 3, 4, 5))));
// console.log(getSeason({ John: 'Smith' }));
// console.log(getSeason(20192701));
// console.log(getSeason(() => new Date()));
// console.log(getSeason(new Date(1900, 0, 22, 23, 45, 11, 500)));
//
// console.log(getSeason(new Date(2018, 4, 17, 11, 27, 4, 321)));
// console.log(getSeason(new Date(1354, 4, 17, 11, 27, 4, 321)));
//
// console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500)));
// console.log(getSeason(new Date(1994, 8, 26, 3, 0, 11, 500)));
module.exports = {
    getSeason
};
