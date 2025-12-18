/*
Microtask Queue & Callback Queue

JavaScript uses queues to manage asynchronous callbacks.
The Event Loop decides which queue to process next after the Call Stack becomes empty.

Microtask Queue

The Microtask Queue holds callbacks that must be executed 
immediately after the Call Stack is empty and before the Callback Queue

*/

console.log("start");

Promise.resolve().then(()=>{
    console.log("Microtask executed")
})
console.log("End");

/*
Explanation

Start is printed first.

Promise callback is placed in the Microtask Queue.

End is printed next.

After the Call Stack is empty, the Event Loop executes the microtask.
*/

/*
Callback Queue (Macrotask Queue)

The Callback Queue stores callbacks from Web APIs that run after microtasks are completed.

Sources of Callback Queue

setTimeout

setInterval

DOM events

I/O operations
*/

console.log("start")
setTimeout(()=>{
    console.log('Macrotask task executed')
},2000)

console.log("End");


/*
Explanation

setTimeout callback goes to the Callback Queue.

JavaScript does not wait for it.

Callback runs only after the Call Stack and Microtask Queue are empty.
*/