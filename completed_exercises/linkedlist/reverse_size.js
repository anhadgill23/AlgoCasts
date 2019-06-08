class Node {
  constructor(data) {
    this.data = data;
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
