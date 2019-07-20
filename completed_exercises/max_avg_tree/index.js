/*
Given a binary tree, find the subtree with maximum average. Return the root of the subtree.
Example Given a binary tree:
       2 ​
     /   \
  -2       14
  / \      / \
-1  1     5  -1
should return 14
*/

// This is incomplete;


class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
}

let average = function() {
  let total = 0
  for (element of arr) {
    total += element
  }
  return total / arr.length
}

let t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');
console.log(t);
