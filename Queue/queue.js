// Implementation of Queue using array

// Define queue class with properties and functions
class Queue {
  // using array to implement queue
  constructor() {
    this.array = [];
  }

  // return true if queue is empty
  isEmpty() {
    return this.array.length == 0;
  }

  // adding element to the queue
  enqueue(item) {
    this.array.push(item);
    console.log(item + " is enqueued in queue");
  }

  // removing element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue underflow";
    }
    return this.array.shift();
  }

  // returns front element of the queue without removing from the queue
  front() {
    if (this.isEmpty()) {
      return "No items in the queue";
    }
    return this.array[0];
  }

  // returns rear element of the queue without removing from the queue
  rear() {
    if (this.isEmpty()) {
      return "No items in the queue";
    }
    return this.array[this.array.length - 1];
  }

  // function to print queue elements
  printQueue() {
    console.log("printing queue elements");
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.array[i] + "");
    }
  }
}

// creating object from queue class
var queue = new Queue();

// Adding elements to the queue
queue.enqueue(20);
queue.enqueue(35);
queue.enqueue(15);
queue.enqueue(50);

// printing queue elements
queue.printQueue();

// removes front element from queue
console.log(queue.dequeue() + " is dequeued from queue");

// printing queue elements after dequeue
queue.printQueue();

// displaying front element of the queue
console.log(queue.front() + " is the front element of queue");

// displaying rear element of the queue
console.log(queue.rear() + " is the rear element of queue");
