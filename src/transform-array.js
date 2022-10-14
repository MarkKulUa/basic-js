const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 * --discard-next исключает следующий элемент массива из преобразованного массива.
 * --discard-prev исключает предыдущий элемент массива из преобразованного массива.
 * --double-next дублирует следующий элемент массива в преобразованном массиве.
 * --double-prev дублирует предыдущий элемент массива в преобразованном массиве.
 */
function transform(arr) {

  if (!arr || !Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const transforms = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  let newArr = [];

  for (let i = 0; i<arr.length; i++) {

    if (
       (arr[i-2] === '--discard-next' && arr[i] ===  '--double-prev')
    ) {
      continue;

    } else if (
        (arr[i] === '--discard-next' && arr[i+2] ===  '--double-prev')
        || (arr[i-1] === '--discard-next' && arr[i+1] ===  '--double-prev')
    ) {
      continue;

    } else if (
        (arr[i] === '--discard-next' && arr[i+2] ===  '--discard-prev')
        || (arr[i-1] === '--discard-next' && arr[i+1] ===  '--discard-prev')
        || (arr[i-2] === '--discard-next' && arr[i] ===  '--discard-prev')
    ) {
      continue;

    } else if (arr[i] === '--double-next') {
      if(arr[i+1]) {
        newArr.push((arr[i+1]));
      }
    }

    else if (arr[i] === '--double-prev') {
      if(arr[i-1]) {
        newArr.push((arr[i-1]));
      }
    }

    else if (arr[i] === '--discard-prev') {
        newArr.pop();
    }

    else if (arr[i-1] === '--discard-next') {
      // newArr.pop();
    }
    else {
      if(!transforms.includes(arr[i])) {
        newArr.push((arr[i]));
      }
    }
  }

  return newArr;
}

// console.log(
//     transform( [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])
// );
console.log(
    transform(
        [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
    )
);
module.exports = {
  transform
};
