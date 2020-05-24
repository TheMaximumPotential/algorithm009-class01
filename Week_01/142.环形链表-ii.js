/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let slow1 = head,
		slow2 = head,
		fast = head,
		flag = true

	while (flag === true || slow1 !== fast) {
		flag = false
		if (!fast || !fast.next || !slow1.next) return null
		slow1 = slow1.next
		fast = fast.next.next
	}

	while (slow1 !== slow2) {
		slow1 = slow1.next
		slow2 = slow2.next
	}

	return slow1
}
// @lc code=end
