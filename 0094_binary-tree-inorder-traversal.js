const inorder = (node, arr) => {
  if (node === null) {
    return;
  }

  inorder(node.left, arr);

  arr.push(node.val);

  inorder(node.right, arr);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * ref: http://alrightchiu.github.io/SecondRound/binary-tree-traversalxun-fang.html
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  inorder(root, result);

  return result;
};
