/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
	let prev = null

	// Traverse through the given linked list
	while (head) {
		const temp = head.next // References the next Node of given linked list
		head.next = prev // head.next point to previous Node, instead of the next Node of the given linked list
		prev = head // Move the prev Node pointer up to head
		head = temp // Move the head up to next Node of the given linked list
	}

	// Prev is the reversed linked list
	return prev
}

// @lc code=end
