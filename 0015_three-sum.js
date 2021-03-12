// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * 待優化的暴力法
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((x, y) => x - y);

  const numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const remainder = 0 - nums[i] - nums[j];

      for (let k = nums.length - 1; k > j; k--) {
        if (nums[k] === remainder) {
          numsSet.add(`${nums[i]}:${nums[j]}:${remainder}`);
          break;
        }
      }
    }
  }

  return [...numsSet].map((item) => item.split(":"));
};
