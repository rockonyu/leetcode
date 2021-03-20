// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

const helper = (list, str, open, close, max) => {
  if (str.length === max * 2) {
    list.push(str);
    return;
  }

  if (open < max) {
    helper(list, `${str}(`, open + 1, close, max);
  }

  if (close < open) {
    helper(list, `${str})`, open, close + 1, max);
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  helper(result, "", 0, 0, n);

  return result;
};
