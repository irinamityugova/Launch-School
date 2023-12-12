/*
Simple Linked List
Write a simple linked list implementation. The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing to the next element in the list of elements. This variant of linked lists is often used to represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a range of data such as the numbers 1-10. Provide methods to reverse the linked list and convert a linked list to and from an array.

Element has data and next element
.datum() returns the data, chainable
.isTail() true if next element is null
.next() returns the next element, chainable

SimpleLinkedList
.size()
.isEmpty()
.peek() the data of the head element
.head() first element, chainable
.push() adds a new element as the head
.pop() removes the head element
.toArray() returns all elements in an array
.reverse() reverses data and next

static .fromArray makes a list
*/

class Element {
  constructor(data, next = null) {
    this.datum = () => data;
    this.next = () => next;
  }

  setNext(pointer) {
    this.next = () => pointer;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }
  peek() {
    return this.isEmpty() ? null : this.head().datum();
  }

  head() {
    return this.isEmpty() ? null : this.list[this.size() - 1];
  }

  push(...datums) {
    datums.reverse().forEach(datum => {
      let previous = this.list[this.list.length - 1];
      let next = new Element(datum, previous);
      this.list.push(next);
      });
  }

  pop() {
    return this.list.pop().datum();
  }

  toArray() {
    return this.list.map(e => e.datum()).reverse();
  }

  reverse() {
    let list = this.toArray().reverse();
    return SimpleLinkedList.fromArray(list);
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList;
    if (array) list.push(...array);
    return list;
  }
}

module.exports = {
  Element,
  SimpleLinkedList
};