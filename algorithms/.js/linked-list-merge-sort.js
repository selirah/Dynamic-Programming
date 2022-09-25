import { LinkedList } from './linked-list.js'

const mergeSort = (linkedList) => {
  /**
   * Sorts a linked list in ascending order
   * - Recursively divide the linked list into sublists containing a single node
   * - Repeatedly merge the sublists to produce sorted sublists until one remains
   *
   * Returns a sorted linked list
   *
   * Runs in O(knlogn) time
   */
  if (linkedList.size() === 1) return linkedList
  if (linkedList.head === null) return linkedList

  let { leftHalf, rightHalf } = split(linkedList)

  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)

  return merge(left, right)
}

const split = (linkedList) => {
  /**
   * Divide the unsorted list at midpoint into sublists
   *
   * Takes O(klogn) time
   */
  if (linkedList === null || linkedList.head === null) {
    const leftHalf = linkedList
    const rightHalf = null
    return { leftHalf, rightHalf }
  }
  const size = linkedList.size()
  const mid = Math.floor(size / 2)

  const midNode = linkedList.nodeAtIndex(mid - 1)

  let leftHalf = linkedList
  let rightHalf = new LinkedList()
  rightHalf.head = midNode.nextNode
  midNode.nextNode = null

  return { leftHalf, rightHalf }
}

const merge = (left, right) => {
  /**
   * Merges two linked lists, sorting by data in nodes
   * Returns a new, merged list
   *
   * Runs in O(n) time
   */
  // Create a new linked list that contains nodes from merging left and right
  let merged = new LinkedList()

  // Add a fake head that is discarded later
  merged.add(0)

  // Set current to the head of the linked list
  let current = merged.head

  // Obtain the nodes for left and right linked list
  let leftHead = left.head
  let rightHead = right.head

  // Iterate over left and right until we reach the tail node of either
  while (leftHead || rightHead) {
    // If the head node of left is None, we're past the tail
    // Add the node from right to merged linked list
    if (leftHead === null) {
      current.nextNode = rightHead
      // Call next on right to set loop condition to False
      rightHead = rightHead.nextNode
    }
    // If the head node of right is None, we're past the tail
    // Add the tail node from left to merged linked list
    else if (rightHead === null) {
      current.nextNode = leftHead
      // Call next on left to set loop condition to False
      leftHead = leftHead.nextNode
    } else {
      // Not at either tail node
      // Obtain node data to perform comparision operations
      const leftData = leftHead.data
      const rightData = rightHead.data
      // If data on left is less than right, set current to left node
      if (leftData < rightData) {
        current.nextNode = leftHead
        // Move left head to next node
        leftHead = leftHead.nextNode
      }
      // If data on left is greater than right, set current to right node
      else {
        current.nextNode = rightHead
        // Move right head to next node
        rightHead = rightHead.nextNode
      }
    }
    // Move current to next node
    current = current.nextNode
  }
  // Discard fake head and set first merged node as head
  const head = merged.head.nextNode
  merged.head = head

  return merged
}

const l = new LinkedList()
l.add(10)
l.add(2)
l.add(44)
l.add(15)
l.add(200)
console.log(l.getLinkedList())
const sortedLinkedList = mergeSort(l)
console.log(sortedLinkedList.getLinkedList())
