// Reverse a Linked List in groups of given size

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  reverse() {
    let current = this.head; // first node
    let prev = null; // null

    while(current) {
      let next = current.next;
      current.next = prev;

      // resetting the prev and current for traversing
      prev = current;
      current = next
    }
    this.head = prev
  }
}

let list = new LinkedList
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.insertFirst(5)
list.reverse()
console.log(list.head.next)
