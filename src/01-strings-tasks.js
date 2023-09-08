function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  const matches = value.match(/Hello, (.+?)!/);
  return matches ? matches[1] : '';
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';').filter(email => email.trim() !== '');
}

function getRectangleString(width, height) {
  const horizontalLine = '─'.repeat(width - 2);
  const top = `┌${horizontalLine}┐\n`;
  const middle = `│${' '.repeat(width - 2)}│\n`.repeat(height - 2);
  const bottom = `└${horizontalLine}┘\n`;
  return top + middle + bottom;
}

function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  const cards = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
  ];
  return cards.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
