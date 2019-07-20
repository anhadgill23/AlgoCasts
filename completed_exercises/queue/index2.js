// Implement a Queue data structure and provide enQ and deQ  functionality where the only data structure you have to use is stack.

// Queue is a linear structure which follows the order is First In First Out(FIFO) to access elements. Mainly the following are basic operations on queue: Enqueue, Dequeue, Front, Rear.


var Stack1 = [];
var Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  // move everything from s1 to s2
  while (Stack1.length > 0) {
    let p = Stack1.pop();
    Stack2.push(p);
  }

  // push element in s1
  Stack1.push(element)

  // push the elements back into s1
  while (Stack2.length > 0) {
    let q = Stack2.pop();
    Stack1.push(q);
  }

  return Stack2;
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (!Stack2.length) {
    return (Stack1.pop());
  } else return false
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue();
Dequeue();
console.log(Stack1);





