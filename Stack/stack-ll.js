// Implement stack using linked list

// defined linked list node
class Node{
    constructor(){
        this.key = 0;
        this.next = null;
    }
}

let top = null;

// function to push element in the stack
function push(x){
    let temp = new Node();

    //check stack overflow condition
    if(temp == null){
        console.log('Stack overflow');
        return;
    }

    //Initialize data into temp data field
    temp.key = x;

    //assign top to temp.next
    temp.next = top;

    //update top reference
    top = temp;
}


// function to check empty stack condition
function isEmpty(){
    return top === null;
}


// function to return top element from the stack
function peek(){
    // check for empty stack
    if(!isEmpty()){
        return top.key;
    }else{
        console.log('Stack is empty');
        return -1;
    }
}

// function to remove top element from the stack
function pop(){
    // check for empty stack
    if(top == null){
        console.log('stack is empty');
        return;
    }

    //update top to point to next node 
    top = top.next;
}

// function to print stack elements
function printStack(){
    // check for empty stack
    if(top == null){
        console.log('stack is empty');
    }else{
        let temp = top;
        while(temp != null){
            console.log(temp.key, ' ');
            temp = temp.next;
        }
    }
}

// insert Stack values
push(11);
push(22);
push(33);
push(44);

// print stack elements
printStack();

// print top element of the stack
console.log('Top element of stack is', peek());

// delete top elements of stack
pop();
pop();

// print stack elements
printStack();

// print top element of the stack
console.log('Top element of stack is', peek());
