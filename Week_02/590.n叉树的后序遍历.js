/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
	if (!root) return []
	let arr = []
	;(function (root) {
		if (!root) return
		root.children.forEach((v) => {
			arguments.callee(v)
		})
		arr.push(root.val)
	})(root)
	return arr
}
// @lc code=end
