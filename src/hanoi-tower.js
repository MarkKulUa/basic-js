const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {

  let turnsSpeedSecond = turnsSpeed / 60 / 60;
  let result = Math.floor(Math.pow(2, disks) -1);
  return {
    'turns': result,
    'seconds': Math.floor(result / turnsSpeedSecond), //Math.floor(turnsSpeedSecond),
  };
}

module.exports = {
  calculateHanoi
};
