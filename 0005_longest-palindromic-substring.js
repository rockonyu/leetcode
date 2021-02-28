// Given a string s, return the longest palindromic substring in s.

// Example:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

var checkIsPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }

  return true;
};

/**
 * 暴力法: 判斷回文的 checkIsPalindrome 太低效會逾時
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subString = s.substring(i, j + 1);

      if (checkIsPalindrome(subString) && subString.length > result.length) {
        result = subString;
      }
    }
  }

  return result;
};
