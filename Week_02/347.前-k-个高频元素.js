/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const obj = {}
	for (let i = 0; i < nums.length; i++) {
		if (!obj[nums[i]]) {
			obj[nums[i]] = 1
		} else {
			obj[nums[i]] = obj[nums[i]] + 1
		}
	}

	const list = []

	const keysArr = Object.keys(obj)
	for (let i = 0; i < keysArr.length; i++) {
		const key = keysArr[i]
		const value = obj[key]
		list.push({ key, value })
	}

	list.sort((r1, r2) => r2.value - r1.value)
	const result = []
	list.map((obj, index) => {
		if (index < k) {
			result.push(parseInt(obj.key, 10))
		}
	})
	return result
}
// @lc code=end
