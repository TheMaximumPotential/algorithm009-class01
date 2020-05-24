/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let i, j, k
	let arr = []
	let len = nums.length
	nums.sort((a, b) => a - b) // 排序
	for (k = 0; k < len; k++) {
		if (nums[k] > 0) break
		if (k > 0 && nums[k] == nums[k - 1]) continue
		i = k + 1
		j = len - 1
		while (i < j) {
			let s = nums[i] + nums[j] + nums[k]
			if (s === 0) {
				arr.push([nums[i], nums[j], nums[k]])
				while (i < j && nums[i] === nums[i + 1]) i++
				while (i < j && nums[j] === nums[j - 1]) j--
				i++
				j--
			} else if (s < 0) i++
			else if (s > 0) j--
		}
	}
	return arr
}
// @lc code=end
