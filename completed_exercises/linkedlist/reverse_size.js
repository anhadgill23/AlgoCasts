class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  reverse(k) {
    let current = this.head;
    let prev = null;
    let counter = 0;

    while(counter < k) {
      let next = current.next;
      current.next = prev;

      prev = current;
      current = next;
      counter++;
    }
    this.head = prev;
  }
}

const list = new LinkedList
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.reverse(2)

console.log(list.head.next)

2,3,4
3,2,4
