# Day 4 – Async JavaScript, Callbacks, Promises, Async/Await & Error Handling

These notes cover asynchronous JavaScript concepts with clear explanations and simple examples. This file can be directly pushed to Git.

---

## 1. Asynchronous JavaScript

JavaScript is **single-threaded**, meaning it executes one task at a time. Asynchronous JavaScript allows long-running operations (like API calls, timers, file reading) to run **without blocking** the main thread.

### Common async operations

* setTimeout / setInterval
* API calls (fetch, axios)
* Event listeners
* Reading files

---

## 2. Callbacks

A **callback** is a function passed as an argument to another function and executed later after an operation completes.

### Example

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

### Problems with callbacks

* Hard to read
* Difficult error handling
* Callback hell (nested callbacks)

---

## 3. Promises

A **Promise** represents the eventual completion or failure of an asynchronous operation.

### Promise states

* Pending
* Fulfilled
* Rejected

### Examplee

```js
const fetchData = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Failed to fetch data");
    }
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Advantages of promises

* Better readability
* Chainable using `.then()`
* Centralized error handling using `.catch()`

---

## 4. Async / Await

`async/await` is syntactic sugar over promises, making asynchronous code look synchronous and easier to understand.

### example

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
```

### Benefits

* Cleaner syntax
* Easier debugging
* Avoids promise chaining

---

## 5. Error Handling

Handling errors is important to prevent application crashes and unexpected behavior.

### Error handling with callbacks

```js
function fetchData(callback) {
  const error = false;

  if (error) {
    callback("Error occurred", null);
  } else {
    callback(null, "Success data");
  }
}

fetchData((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

---

### Error handling with promises

```js
fetchData
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

---

### Error handling with async/await

```js
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

---

## 6. Comparison

| Feature        | Callbacks | Promises | Async/Await |
| -------------- | --------- | -------- | ----------- |
| Readability    | Low       | Medium   | High        |
| Error handling | Difficult | Easier   | Best        |
| Nesting        | High      | Low      | Very Low    |

---

## 7. Conclusion

* Callbacks are the foundation but can become complex
* Promises solve callback hell
* Async/Await provides the cleanest and most readable syntax
* Proper error handling is essential in all async approaches
