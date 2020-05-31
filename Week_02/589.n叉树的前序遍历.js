/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	if (root) {
		let arr = []
		;(function (root) {
			arr.push(root.val)
			if (root.children) {
				root.children.forEach((v) => {
					arguments.callee(v)
				})
			}
		})(root)
		return arr
	} else return []
}
// @lc code=end
