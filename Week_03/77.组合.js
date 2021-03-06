/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	var result = []
	var subresult = []
	function combineSub(start, subresult) {
		//terminator
		if (subresult.length == k) {
			result.push(subresult.slice(0))
			return
		}
		var len = subresult.length
		for (var i = start; i <= n - (k - len) + 1; i++) {
			subresult.push(i)
			combineSub(i + 1, subresult)
			subresult.pop()
		}
	}
	combineSub(1, subresult)
	return result
}
// @lc code=end
