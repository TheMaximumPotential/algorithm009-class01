/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
	const dummyHead = new ListNode(0)
	dummyHead.next = head

	let prev = dummyHead
	let first = prev.next

	while (first && first.next) {
		let second = first.next
		let next = second.next

		second.next = first
		first.next = next
		prev.next = second

		prev = first
		first = first.next
	}

	return dummyHead.next
}
// @lc code=end
