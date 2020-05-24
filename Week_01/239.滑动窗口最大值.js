/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	class SlidingWindow {
		constructor() {
			this.arr = []
		}

		push(val) {
			while (this.arr.length > 0 && this.arr[this.arr.length - 1] < val) {
				this.arr.pop()
			}
			this.arr.push(val)
		}

		pop(val) {
			if (this.arr[0] === val) this.arr.shift()
		}

		max() {
			return this.arr[0]
		}
	}
	let max = []
	let window = new SlidingWindow()
	for (let i = 0; i < nums.length; i++) {
		if (i < k - 1) {
			window.push(nums[i])
		} else {
			window.push(nums[i])
			max.push(window.max())
			window.pop(nums[i - k + 1])
		}
	}
	return max
}
// @lc code=end
