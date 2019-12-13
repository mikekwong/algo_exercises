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
      // set new head's next to be old head
      newNode.next = this.head
      // set current head to be new node
      this.head = newNode
    }
    this.length++
    return this
  }

  get (idx) {
    if (idx < 0 || idx >= this.length) return null

    let counter = 0
    let current = this.head
    while (counter !== idx) {
      current = current.next
      counter++
    }
    // return the found node
    return current
  }

  set (idx, val) {
    let foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert (idx, val) {
    // Edge cases
    if (idx < 0 || idx > this.length) return false
    // !! for truthy conversio to help return true in addition to invoking method
    if (idx === this.length) return !!this.push(val)
    else if (idx === 0) return !!this.unshift(val)

    let newNode = new Node(val)
    let prev = this.get(idx - 1)
    // hold former next as placeholder before the insertion
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove (idx) {
    if (idx < 0 || idx > this.length) return undefined
    if (idx === this.length) return this.pop()
    if (idx === 0) return this.shift()

    let prevNode = this.get(idx - 1)
    let removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed
  }

  reverse () {
    // Swap head and tail
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  print () {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

// Head 77 -> 6 -> 43 -> 76 -> 89 tail

var list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('!')
list.print()
list.reverse()
list.print()
