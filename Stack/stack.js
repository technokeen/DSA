// Implement stack using Array
var top = -1;
var MAX = 10000;
var stack = Array(MAX).fill(0);

function isEmpty() {
  return top < 0;
}

function pop() {
  if (top < 0) {
    console.log("Stack Underflow");
    return 0;
  } else {
    var temp = stack[top];
    top--;
    return temp;
  }
}

function push(x) {
  if (top >= MAX - 1) {
    console.log("Stack Overflow");
    return false;
  } else {
    top++;
    stack[top] = x;
    console.log(x + " pushed into the top of the stack");
    return true;
  }
}

function peek() {
  if (top < 0) {
    console.log("Stack underflow");
    return 0;
  } else {
    var x = stack[top];
    return x;
  }
}

function print() {
  for (let i = top; i > -1; i--) {
    console.log(stack[i] + " ");
  }
}

push(30);
push(70);
push(50);
console.log(pop() + " Popped from stack");
console.log("Top element is :" + peek());
console.log("Elements present in stack : ");
print();
