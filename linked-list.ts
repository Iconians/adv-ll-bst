// Linked List Implementation
class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    // TODO: Implement append method
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    // TODO: Implement find method
    let curr = this.head;

    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    // TODO: Implement reverse method
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    // TODO: Implement remove method
    let curr = this.head;
    let prev: ListNode | null = null;
    while (curr !== null) {
      if (curr.value === value) {
        if (prev === null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  print(): void {
    let curr = this.head;
    const list: number[] = [];
    while (curr) {
      list.push(curr.value);
      curr = curr.next;
    }
    console.log(list.join(" -> "));
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.print();
linkedList.reverse();
linkedList.print();
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
linkedList.print();
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
