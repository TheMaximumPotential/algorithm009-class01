/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let len = strs.length
	if (!len) return []
	let hash = new Map()
	for (let i = 0; i < len; i++) {
		let str = strs[i].split('').sort().join('')
		if (hash.has(str)) {
			let item = hash.get(str)
			item.push(strs[i])
			hash.set(str, item)
		} else {
			hash.set(str, [strs[i]])
		}
	}
	return [...hash.values()]
}
// @lc code=end
