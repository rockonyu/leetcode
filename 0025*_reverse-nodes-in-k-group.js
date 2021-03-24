// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null;

  let tail = head;

  for (let i = 1; i < k; i++) {
    tail = tail.next;

    if (!tail) return head;
  }

  var next = tail.next;
  tail.next = null;

  reverse(head);

  head.next = reverseKGroup(next, k);

  return tail;
};

function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;

    curr = next;
  }
}
