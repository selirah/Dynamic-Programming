class Node {
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

const mergeLists = (l1, l2) => {
  if (l1 === undefined) return l2
  if (l2 === undefined) return l1

  if (l1.val <= l2.val) {
    l1.next = mergeLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeLists(l1, l2.next)
    return l2
  }
}

const pushLinkedList = (node) => {
  let tmp = node
  let arr = []
  while (tmp !== undefined) {
    arr.push(tmp.val)
    tmp = tmp.getNext()
  }
  return arr.join(' ')
}

const n1 = new Node(1)
const n2 = new Node(5)
const n3 = new Node(13)
const n4 = new Node(14)
const n5 = new Node(550)

const n1_1 = new Node(2)
const n2_2 = new Node(15)
const n3_3 = new Node(130)
const n4_4 = new Node(200)
const n5_5 = new Node(350)

n1.setNext(n2)
n2.setNext(n3)
n3.setNext(n4)
n4.setNext(n5)

n1_1.setNext(n2_2)
n2_2.setNext(n3_3)
n3_3.setNext(n4_4)
n4_4.setNext(n5_5)

const sortedMerge = mergeLists(n1, n1_1)
console.log(pushLinkedList(sortedMerge))
