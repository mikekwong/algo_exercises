class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop () {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      // newtail is behind
      newTail = current
      // current is the next one
      current = current.next
    }
    // asign the tail to current (last tail)
    this.tail = newTail
    // sever the arrow connection to former last tail
    this.tail.next = null
    this.length--
    if (ths.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift () {
    if (!this.head) return undefined
    let currentHead = this.head
    // make next head the current head
    this.head = currentHead.next
    this.length--
    // If there are no nodes left after shifting
    if (this.length === 0) this.tail = null
    return currentHead
  }

  unshift (val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
}

// Head 77 -> 6 -> 43 -> 76 -> 89 tail

var list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!')
