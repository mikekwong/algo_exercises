class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      // point the new node val's previous to the old tail
      newNode.prev = this.tail
      // update the new current tail to be new node val
      this.tail = newNode
    }
    this.length++
    return this
  }
}

let first = new Node(12)
first.next = new Node(13)
first.next.prev = first
first
