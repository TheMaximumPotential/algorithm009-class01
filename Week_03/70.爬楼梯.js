/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let map = {}

var climbStairs = function (n) {
	if (n === 1 || n === 0) {
		return 1
	}
	let res1 = map[n - 1] ? map[n - 1] : (map[n - 1] = climbStairs(n - 1))
	let res2 = map[n - 2] ? map[n - 2] : (map[n - 2] = climbStairs(n - 2))
	let result = 0
	result += res1 + res2

	return result
}
// @lc code=end
