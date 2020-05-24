/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0,
		len = height.length,
		minHeight = 0,
		i = 0,
		j = len - 1
	while (i < j) {
		minHeight = height[i] < height[j] ? height[i++] : height[j--]
		max = Math.max(max, (j - i + 1) * minHeight)
	}

	return max
}
// @lc code=end
