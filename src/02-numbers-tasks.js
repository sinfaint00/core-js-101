/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of a circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns the average of two numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 */

// Define the getAverage function
function getAverage(value1, value2) {
  // Check if both values are valid numbers
  if (typeof value1 !== 'number' || typeof value2 !== 'number' || Number.isNaN(value1) || Number.isNaN(value2)) {
    return Number.MAX_VALUE; // Return the maximum representable value for invalid inputs
  }

  // Calculate and return the average
  return (value1 + value2) / 2;
}

/**
 * Returns a distance between two points by Cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns a root of a linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in the Cartesian plane.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

/**
 * Returns the last digit of an integer number.
 *
 * @param {number} value
 * @return {number}
 */
function getLastDigit(value) {
  return Math.abs(value % 10);
}

/**
 * Returns a number from a given string representation.
 *
 * @param {string} value
 * @return {number}
 */
function parseNumberFromString(value) {
  return parseFloat(value);
}

/**
 * Returns the diagonal length of the rectangular parallelepiped given by its sides a, b, c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to the specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 */
function roundToPowerOfTen(num, pow) {
  const multiplier = 10 ** pow;
  return Math.round(num / multiplier + Number.EPSILON) * multiplier;
}

/**
 * Returns true if the number is prime; otherwise, false.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tries to convert a value to a number and returns it if conversion was successful;
 * otherwise, returns the default value passed as a second argument.
 *
 * @param {any} value
 * @param {number} def
 * @return {number}
 */
function toNumber(value, def) {
  const result = parseFloat(value);
  return Number.isNaN(result) ? def : result;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
