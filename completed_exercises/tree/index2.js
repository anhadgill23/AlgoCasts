class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children.filter((node) => {
      return node.data != data
    });
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    // create an empty array
    // push the root into the array
    // while the array is !empty, pop the first element, apply whatever method you wish to apply and push its children in the array.
    // repeat
    let array = [this.root];
    while (array.length) {
      let node = array.shift()
      array.push(...node.children)
      // do something to that element
      // fn looks something like (node) => {
      //    node.data += 10
      // }
      fn(node)
    }
  }

  traverseDF(fn) {
    let array = [this.root];
    while (array.length) {
      let node = array.shift()
      array.unshift(...node.children)
      fn(node)
    }
  }
}

/*
- Linked list has nodes, each has some data. It's root node is the head.
- In order to add nodes, you need to have add methods in your linkedList class, and update the references.


- A tree has nodes too, each has some data and has reference to its children. Its root node is root.
- In order to add more nodes, we push to the children array. This job is done by the node.
- But which node do we wanna do that for? That's what the Tree class handles.
*/
