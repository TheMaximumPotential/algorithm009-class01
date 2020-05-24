/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (!head || !head.next) return false
	let fast = head.next
	let slow = head
	while (fast !== slow) {
		if (fast === null || fast.next === null) {
			return false
		}
		fast = fast.next.next
		slow = slow.next
	}
	return true
}
// @lc code=end
