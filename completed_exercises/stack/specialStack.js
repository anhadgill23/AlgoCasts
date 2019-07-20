/*
Question: Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1). To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.
*/

class Stack {
  constructor() {
    this.data = [];
    this.min_element = [];
  }

  push(element) {
    let min_element = this.min_element;
    this.data.push(element);
    if (!min_element.length || element < min_element[min_element.length - 1]) {
      min_element.push(element);
    } else {
      min_element.push(min_element[min_element.length - 1]);
    }
  }

  pop(element) {
    this.data.pop();
    this.min_element.pop();
  }

  min() {
    return this.min_element[this.min_element.length - 1];
  }
}

let test = new Stack();
test.push(2);
test.push(3);
test.push(1);

console.log(test.min());
