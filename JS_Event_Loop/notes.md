# JavaScript Event Loop

The JavaScript Event Loop is a mechanism that allows JavaScript to perform **non-blocking asynchronous operations**, even though JavaScript is **single-threaded**.

It works by coordinating between the **Call Stack**, **Web APIs**, **Microtask Queue**, and **Callback Queue**.

---

## 1. Call Stack

The **Call Stack** is where JavaScript executes code line by line.
It follows the **LIFO (Last In, First Out)** principle.

### Key Points

* Executes synchronous code
* One function runs at a time
* Blocks execution if a task takes too long

### Example

````js
function greet() {
  console.log("Hello");
}

greet();
```js

**Explanation:**
- `greet()` is added to the Call Stack
- `console.log` runs
- Function is removed from the stack

---

## 2. Web APIs

Web APIs are provided by the **browser**, not JavaScript itself.
They handle **asynchronous tasks** without blocking the Call Stack.

### Common Web APIs
- `setTimeout`
- `setInterval`
- DOM events
- `fetch` / API calls

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");
```js

**Explanation:**
- `setTimeout` is handled by Web APIs
- JavaScript continues execution
- After 1 second, callback moves to the Callback Queue

**Output:**
```js
Start
End
Inside setTimeout
```js

---

## 3. Microtask Queue

The **Microtask Queue** stores callbacks that must run **immediately after** the Call Stack is empty and **before** the Callback Queue.

### Sources of Microtasks
- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`

### Example

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask executed");
});

console.log("End");
```js

**Explanation:**
- Promise callback goes to the Microtask Queue
- Executed before callback queue tasks

**Output:**
```js
Start
End
Microtask executed
```js

---

## 4. Callback Queue (Macrotask Queue)

The **Callback Queue** stores callbacks from Web APIs that execute **after microtasks** are completed.

### Sources
- `setTimeout`
- `setInterval`
- DOM events

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 0);

console.log("End");
```js

**Explanation:**
- Callback waits until Call Stack and Microtask Queue are empty

**Output:**
```js
Start
End
Callback executed
```js

---

## 5. Microtask vs Callback Queue

### Combined Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Callback Queue Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask Queue Task");
});

console.log("End");
```js

### Execution Order
1. Synchronous code runs first
2. Microtask Queue executes next
3. Callback Queue executes last

**Output:**
```js
Start
End
Microtask Queue Task
Callback Queue Task
```js

---

## Summary

- JavaScript is single-threaded
- Web APIs handle async tasks
- Microtask Queue has higher priority than Callback Queue
- Event Loop manages execution order

This explains how JavaScript handles asynchronous operations efficiently.

````
