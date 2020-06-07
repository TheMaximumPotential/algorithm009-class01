/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
	if (root == null) {
		return 0
	}
	var result = Number.MAX_SAFE_INTEGER
	function helper(root, level) {
		if (root !== null) {
			!root.left && !root.right && (result = Math.min(result, level))
			if (root.left !== null) {
				helper(root.left, level + 1)
			}
			if (root.right !== null) {
				helper(root.right, level + 1)
			}
		}
	}
	helper(root, 1)
	return result
}
// @lc code=end
