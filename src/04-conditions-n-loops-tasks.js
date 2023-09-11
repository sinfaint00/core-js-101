function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width
    && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top
  );
}

function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2,
  );
  return distance <= circle.radius;
}

function findFirstSingleChar(str) {
  const charCount = new Map();
  str.split('').forEach((char) => {
    const currentCount = charCount.get(char) || 0;
    charCount.set(char, currentCount + 1);
  });

  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (charCount.get(char) === 1) {
      return char;
    }
    i += 1;
  }

  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${Math.min(a, b)}, ${Math.max(a, b)}${endBracket}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
  return num < 0 ? -reversed : reversed;
}

function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').map(Number);
  let sum = 0;
  let double = false;
  let i = digits.length - 1;

  while (i >= 0) {
    const digit = digits[i];

    if (double) {
      const doubledDigit = digit * 2;
      sum += (doubledDigit > 9) ? doubledDigit - 9 : doubledDigit;
    } else {
      sum += digit;
    }

    double = !double;
    i -= 1; // Уменьшаем значение i на 1
  }

  return sum % 10 === 0;
}


function getDigitalRoot(num) {
  let n = num; // Создаем локальную переменную n для хранения значения num
  while (n > 9) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
}

function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}' || char === '>') {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(paths) {
  const commonPath = [];
  const parts = paths.map((path) => path.split('/'));

  for (let i = 0; i < parts[0].length; i += 1) {
    const part = parts[0][i];

    if (parts.every((p) => p[i] === part)) {
      commonPath.push(part);
    } else {
      break;
    }
  }

  return commonPath.length > 0 ? `${commonPath.join('/')}/` : '';
}


function getMatrixProduct(m1, m2) {
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const cols2 = m2[0].length;
  const result = new Array(rows1);

  for (let i = 0; i < rows1; i += 1) {
    result[i] = new Array(cols2);
    for (let j = 0; j < cols2; j += 1) {
      result[i][j] = 0;
      for (let k = 0; k < cols1; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}


function evaluateTicTacToePosition(position) {
  // Check rows
  for (let i = 0; i < 3; i += 1) {
    if (position[i][0] === position[i][1]) {
      if (position[i][0] === position[i][2]) {
        if (position[i][0] !== undefined) {
          return position[i][0];
        }
      }
    }
  }

  // Check columns
  for (let j = 0; j < 3; j += 1) {
    if (position[0][j] === position[1][j]) {
      if (position[0][j] === position[2][j]) {
        if (position[0][j] !== undefined) {
          return position[0][j];
        }
      }
    }
  }

  // Check diagonals
  if (position[0][0] === position[1][1]) {
    if (position[0][0] === position[2][2]) {
      if (position[0][0] !== undefined) {
        return position[0][0];
      }
    }
  }

  if (position[0][2] === position[1][1]) {
    if (position[0][2] === position[2][0]) {
      if (position[0][2] !== undefined) {
        return position[0][2];
      }
    }
  }

  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
