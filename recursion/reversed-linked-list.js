class LinkedListNode {
  val
  next

  constructor(val) {
    this.val = val
  }

  setNext(node) {
    this.next = node
  }

  getNext() {
    return this.next
  }
}

const reverseList = (node) => {
  if (node === undefined || node.next === undefined) return node
  const p = reverseList(node.next)
  node.next.next = node
  node.next = undefined
  return p
}

const pushLinkedList = (node) => {
  let tmp = node
  let arr = []
  while (tmp !== undefined) {
    arr.push(tmp.val)
    tmp = tmp.getNext()
  }
  return arr.join('->')
}

const n1 = new LinkedListNode(1)
const n2 = new LinkedListNode(2)
const n3 = new LinkedListNode(3)
const n4 = new LinkedListNode(4)
const n5 = new LinkedListNode(5)

n1.setNext(n2)
n2.setNext(n3)
n3.setNext(n4)
n4.setNext(n5)

console.log(pushLinkedList(n1))
const reversed = reverseList(n1)
console.log(pushLinkedList(reversed))
