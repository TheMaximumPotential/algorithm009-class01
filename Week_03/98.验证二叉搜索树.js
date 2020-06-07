/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

var isValidBST = function (root) {
	let inorder = -Infinity
	let stack = []

	while (stack.length || root !== null) {
		while (root !== null) {
			stack.push(root)
			root = root.left
		}
		root = stack.pop()
		if (root.val <= inorder) return false
		inorder = root.val
		root = root.right
	}
	return true
}
// @lc code=end
