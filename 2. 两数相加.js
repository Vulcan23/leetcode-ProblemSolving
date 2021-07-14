/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = null,
        tail = null;
    let carry = 0;
    while (l1 || l2) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    carry > 0 && (tail.next = new ListNode(carry));
    return head;
};