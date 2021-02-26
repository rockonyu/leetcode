// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * 暴力解： 使用兩個迴圈遍歷所有解，並計算最長不重複的字元
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let subString = s[i];

    for (let j = i + 1; j < s.length; j++) {
      if (subString.includes(s[j])) {
        break;
      }

      subString += s[j];
    }

    result = Math.max(result, subString.length);
  }

  return result;
};

/**
 * 單迴圈解，並使用 flag 紀錄開頭位置
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let result = 0;
  let start = 0;
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    // 重複字元出現需要重新設定開頭位置
    if (charMap.has(s[i])) {
      // 開頭位置為與自身相同字元的 index + 1 或當前開頭位置之間的最大值
      start = Math.max(start, charMap.get(s[i]) + 1);
    }

    // 保存當前 index 與字元供後續迴圈判斷
    charMap.set(s[i], i);
    result = Math.max(result, i - start + 1);
  }

  return result;
};
