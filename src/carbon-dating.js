const { NotImplementedError } = require('../extensions/index.js');



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
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let paramVal = parseFloat(sampleActivity);

  if (typeof sampleActivity !== 'string' || !sampleActivity || !paramVal || paramVal < 0  || paramVal > 15) {
    return false;
  }

  return  Math.ceil(Math.log(MODERN_ACTIVITY / paramVal) / ( 0.693 / HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};
