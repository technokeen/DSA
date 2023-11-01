// Implementation of queue using linked list

// define linked list node as a class
class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

// declare front and rear elements of queue
let front = null,
  rear = null;

// function to add elements in queue
function enqueue(key) {
  // create a new linked list node
  let temp = new Node(key);

  // if queue is empty, then new node will be front and rear both
  if (rear == null) {
    front = rear = temp;
    return;
  }

  // Add the new node at the end of queue and change rear
  rear.next = temp;
  rear = temp;
}

//function to remove elements from queue
function dequeue() {
  // if queue is empty, return NULL
  if (front === null) {
    return;
  }

  // store previous front and move front one node ahead
  front = front.next;

  // if front becomes null, then change rear also to null
  if (front === null) {
    rear = null;
  }
}

// function to print queue elements
function printQueue() {
  let temp = front;
  console.log("printing queue elements");
  while (temp !== null) {
    console.log(temp.key + " ");
    temp = temp.next;
  }
}

// adding elements to the queue
enqueue(10);
enqueue(20);
enqueue(50);
enqueue(30);

// printing queue after adding elements
printQueue();

// removed front element from the queue
dequeue();

// printing queue after deleting element from queue
printQueue();

// printing front and rear elements from queue
console.log("Queue front", front != null ? front.key : -1);
console.log("Queue rear", rear != null ? rear.key : -1);
