let arr = [1, 2, 3, 4, 5];
let stack = []

// remember LIFO

// instead of initialize, you need a constructor in js. Instead of @data, you need this.data.
class Stack {
  constructor() {
    this.data = []
  }

  push(something) {
    this.data.push(something);
  }

  pop() {
    return this.data.pop();
  }
}

let shtack = new Stack
shtack.push(2)
shtack.push(3)
console.log(shtack.pop())
