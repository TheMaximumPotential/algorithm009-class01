/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let arr = []

	var prodBrackets = (str, left, right) => {
		if (str.length === 2 * n) {
			arr.push(str)
			return
		}
		if (left < n) {
			prodBrackets(str + '(', left + 1, right)
		}
		if (right < left) {
			prodBrackets(str + ')', left, right + 1)
		}
	}

	prodBrackets('', 0, 0)
	return arr
}
// @lc code=end
