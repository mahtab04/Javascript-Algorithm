class Stack {
  constructor() {
    this.data = [];
  }
  push(x) {
    this.data.push(x);
  }
  pop() {
    if (!this.IsEmpty()) {
      return this.data.pop();
    }
    return "Underflow";
  }
  IsEmpty() {
    //returns true if stack is empty
    return this.data.length === 0;
  }
  //returns top element of stack
  peek() {
    return this.data[this.data.length - 1];
  }
  printStack() {
    for (let item of this.data) {
      console.log(item);
    }
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.printStack();
console.log(stack.IsEmpty());
stack.pop();
console.log(stack.peek());

stack.printStack();
