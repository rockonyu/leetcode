// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * 暴力法
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((x, y) => x - y);

  const arrSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          arrSet.add([nums[i], nums[j], nums[k]].join());
          break;
        }
      }
    }
  }

  return Array.from(arrSet).map((item) => item.split(","));
};
