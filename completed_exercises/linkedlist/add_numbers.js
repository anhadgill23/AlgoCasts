/*
Add two numbers represented by linked lists | Set 1
Given two numbers represented by two lists, write a function that returns sum list. The sum list is list representation of addition of two input numbers.
Example 1

Input:
  First List: 5->6->3  // represents number 365
  Second List: 8->4->2 //  represents number 248
Output
  Resultant list: 3->1->6  // represents number 613
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

class AddLists {
  constructor(list1, list2) {
    this.list1 = list1;
    this.list2 = list2;
  }

  add() {
    let list1_node = this.list1.head;
    let list2_node = this.list2.head;
    let join_list1 = ''
    let join_list2 = ''
    while (list1_node) {
      join_list1 += list1_node.data
      list1_node = list1_node.next;
    }
    while (list2_node) {
      join_list2 += list2_node.data
      list2_node = list2_node.next;
    }
    return this.create_new_list(String(parseInt(join_list1) + parseInt(join_list2)))
  }

  create_new_list(string) {
    const result = new LinkedList
    for(let char of string) {
      console.log(char)
      result.insertFirst(char)
    }
    return result
  }
}

const list1 = new LinkedList
list1.insertFirst(8)
list1.insertFirst(9)
list1.insertFirst(3)

const list2 = new LinkedList
list2.insertFirst(9)
list2.insertFirst(9)

const add_num = new AddLists(list1, list2)
console.log(add_num.add())
