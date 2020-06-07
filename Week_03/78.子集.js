/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let res = [[]]
	for (let i = 0; i < nums.length; i++) {
		let len = res.length
		for (let j = 0; j < len; j++) {
			let sub = res[j].slice()
			sub.push(nums[i])
			res.push(sub)
		}
	}
	return res
}
// @lc code=end
