// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size(){
    let count = 0 
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }

  getFirst(){
    return this.head
  }

  getLast(){
    if (!this.head) return null
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if (!this.head) return
    this.head = this.head.next
  }

  removeLast(){
    if (!this.head) return
    if (!this.head.next) {
      this.head = null
      return
    }

    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
  }

  insertLast(data){
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    this.getLast().next = new Node(data)
  }

  getAt(index){
    if (this.size() - 1 < index) return null
    let current = this.head
    let count = 0
    while (count !== index) {
      count++
      current = current.next
    }
    return current
  }

  removeAt(index){ 
    if (this.size() - 1 < index) return
    if (index === 0) {
      this.removeFirst()
      return
    }

    const previous = this.getAt(index-1)
    previous.next = previous.next.next
  }

  insertAt(data, index){
    if (this.size() - 1 < index) {
      this.insertLast(data)
      return
    }

    if (index === 0) {
      this.insertFirst(data)
      return
    }

    const node = this.getAt(index-1)
    node.next = new Node(data, node.next)
  }

  forEach(callback) {
    let node = this.head
    while (node) {
      callback(node)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node;
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
