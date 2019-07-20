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
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  reverse(current) {
    if (!current) {
      return;
    }
    if (!current.next) {
      this.head = current;
      return;
    }
    this.reverse(current.next) // 2 node

    current.next.next = current // pointer of 2 to 1
    current.next = null
  }

  add(num) {
    let node = this.head;
    while(node) {
      node.data += num;
      node = node.next;
    }
    return this;
  }

  traverse_recursion(current, num) {
    if (!current) {
      return;
    } else {
      current.data += num;
      this.traverse_recursion(current.next, num)
    }
    return;
  }

}

let list = new LinkedList
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.insertFirst(5)
list.traverse_recursion(list.head, 5)
console.log(list)
