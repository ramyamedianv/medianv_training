/*
The Call Stack is where JavaScript keeps track of function calls. It works in LIFO (Last In, First Out) order.

How it works

When a function is called → it is pushed to the stack

When the function finishes → it is popped from the stack

JavaScript executes one function at a time (single-threaded)

*/

function first() {
console.log("First function");
}


function second() {
first();
console.log("Second function");
}


second();

/*
Execution Order

Call Stack:
1. second()
2. first()
3. first() removed
4. second() removed

Output:
First function
Second function

*/