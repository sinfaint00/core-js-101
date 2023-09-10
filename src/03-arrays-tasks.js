function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => 2 * index + 1);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.filter((item) => typeof item === 'string').map((str) => str.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.reduce((count, num) => (num > 0 ? count + 1 : count), 0);
}

function sortDigitNamesByNumericOrder(arr) {
  const digitMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return arr.sort((a, b) => digitMap[a] - digitMap[b]);
}

function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((val) => val === item).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country !== b.country) {
      return a.country.localeCompare(b.country);
    }
    return a.city.localeCompare(b.city);
  });
}

const getIdentityMatrix = (n) => {
  const matrix = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
    const row = [];
    for (let colIndex = 0; colIndex < n; colIndex += 1) {
      row.push(rowIndex === colIndex ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
};


function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  const resultMap = new Map();
  array.forEach((item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!resultMap.has(key)) {
      resultMap.set(key, []);
    }
    resultMap.get(key).push(value);
  });
  return resultMap;
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce((result, index) => result[index], arr);
}

function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);

  if (arr.length % 2 === 0) {
    // Exclude the middle element in the tail slice for even-length arrays.
    return [...tail, ...head];
  }

  return [...tail, arr[middle], ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
