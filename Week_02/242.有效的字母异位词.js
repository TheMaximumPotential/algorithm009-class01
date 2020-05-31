/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false
	let sMap = new Map()
	let flag = true
	for (let i = 0; i < s.length; i++) {
		let si = s[i]
		let ti = t[i]
		if (sMap.get(si)) {
			let gsi = sMap.get(si)
			sMap.set(si, ++gsi)
		} else {
			sMap.set(si, 1)
		}
		if (sMap.get(ti)) {
			let gti = sMap.get(ti)
			sMap.set(ti, --gti)
		} else {
			sMap.set(ti, -1)
		}
	}
	flag &&
		sMap.forEach((v) => {
			if (v !== 0) flag = false
		})
	return flag
}
// @lc code=end
