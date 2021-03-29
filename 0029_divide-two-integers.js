// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const MAX_NUMBER = Math.pow(2, 31);
const MIN_NUMBER = -Math.pow(2, 31);

var divide = function (dividend, divisor) {
  if (dividend === MIN_NUMBER && divisor === -1) {
    return MAX_NUMBER - 1;
  }

  if (divisor === 1) {
    return dividend;
  }

  let isNegative = false;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  let currDividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;

  while (currDividend >= divisor) {
    currDividend -= divisor;

    quotient++;
  }

  return isNegative ? -quotient : quotient;
};
