class Node {
  data = null
  nextNode = null

  constructor(data) {
    this.data = data
  }
}

export class LinkedList {
  // Singly linked list
  head

  constructor() {
    this.head = null
  }

  isEmpty() {
    return this.head === null
  }

  size() {
    // Returns the number of nodes in the list
    // Takes O(n) time
    let current = this.head
    let count = 0

    while (current) {
      count += 1
      current = current.nextNode
    }
    return count
  }

  add(data) {
    // Adds a new Node containing data at the head of the list
    // Takes O(1) time
    let newNode = new Node(data)
    newNode.nextNode = this.head
    this.head = newNode
  }

  search(key) {
    // Search for the first node containing data that matches the key
    // Returns the node or `null` if not found
    // Takes O(n) time
    let current = this.head

    while (current) {
      if (current.data === key) return current.data
      else current = current.nextNode
    }
    return null
  }

  insert(data, index) {
    // Inserts a new Node containing data at index position
    // Insertion takes O(n) time but finding the node at the
    // insertion point takes O(n) time
    // Takes overall O(n) time
    if (index === 0) this.add(data)
    if (index > 0) {
      let newNode = new Node(data)
      let position = index
      let current = this.head

      while (position > 1) {
        current = current.nextNode
        position -= 1
      }

      const prevNode = current
      const nextNode = current.nextNode

      prevNode.nextNode = newNode
      newNode.nextNode = nextNode
    }
  }

  remove(key) {
    // Removes Node containing data that matches the key
    // Returns the Node or null if key doesn't exist
    // Takes O(n) time
    let current = this.head
    let previous = null
    let found = false

    while (current && !found) {
      if (current.data === key && current === this.head) {
        found = true
        this.head = current.nextNode
      } else if (current.data === key) {
        found = true
        previous.newNode = current.nextNode
      } else {
        previous = current
        current = current.nextNode
      }
    }
    return current
  }

  nodeAtIndex(index) {
    // Get the node at index position
    // Returns a node at index position
    if (index === 0) return this.head
    let current = this.head
    let position = 0

    while (position < index) {
      current = current.nextNode
      position += 1
    }

    return current
  }

  getLinkedList() {
    let current = this.head
    let arr = []
    while (current) {
      if (current === this.head) arr.push(`[Head: ${current.data}]`)
      else if (current.nextNode === null) arr.push(`[Tail: ${current.data}]`)
      else arr.push(`[${current.data}]`)

      current = current.nextNode
    }
    return arr.join('->')
  }
}

const l = new LinkedList()
l.add(1)
l.add(2)
l.add(3)
l.add(4)
l.add(5)
l.add(6)
// console.log(l.search(4))
// l.insert(9, 1)
// console.log(l.getLinkedList())
// l.remove(9)
