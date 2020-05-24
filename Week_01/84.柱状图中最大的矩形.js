/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	let maxarea = 0
	let stack = [-1]
	let len = heights.length
	for (let i = 0; i < len; i++) {
		while (
			stack.length > 1 &&
			heights[stack[stack.length - 1]] >= heights[i]
		) {
			maxarea = Math.max(
				maxarea,
				heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
			)
		}
		stack.push(i)
	}
	console.log(stack)
	while (stack.length > 1) {
		maxarea = Math.max(
			maxarea,
			heights[stack.pop()] *
				(heights.length - stack[stack.length - 1] - 1)
		)
	}
	return maxarea
}
// @lc code=end
