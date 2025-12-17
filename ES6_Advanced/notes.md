# ES6 Advanced – Day 2

## Overview

This document covers **ES6 Advanced concepts** as the **Day 2 topic**. The focus is on writing clean, readable, and modern JavaScript using commonly used ES6 features.

---

## 1. Destructuring

Destructuring helps extract values from arrays or objects and store them into variables easily.

### Array Destructuring

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c);
```

Skip values:

```js
const [first, , third] = numbers;
console.log(first, third);
```

Default values:

```js
const [x = 1, y = 2] = [5];
console.log(x, y);
```

---

### Object Destructuring

```js
const user = {
  name: "Ramya",
  role: "Developer",
  experience: 2
};

const { name, role } = user;
console.log(name, role);
```

Rename variables:

```js
const { name: userName } = user;
console.log(userName);
```

Default value:

```js
const { salary = 30000 } = user;
console.log(salary);
```

---

## 2. Spread Operator

The spread operator expands values from arrays or objects.

### Spread with Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);
```

Copy an array:

```js
const copyArr = [...arr1];
```

---

### Spread with Objects

```js
const userDetails = { name: "Ramya", age: 22 };
const extraDetails = { city: "Hyderabad" };

const fullDetails = { ...userDetails, ...extraDetails };
console.log(fullDetails);
```

---

## 3. Rest Operator

The rest operator collects multiple values into an array.

### Rest in Functions

```js
function calculateTotal(...prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(calculateTotal(100, 200, 300));
```

### Rest in Destructuring

```js
const colors = ["red", "blue", "green", "yellow"];

const [primary, secondary, ...others] = colors;
console.log(primary, secondary, others);
```

---

## 4. Array Methods

Array methods are heavily used in real applications like React and Node.js.

### map()

Used to transform data.

```js
const prices = [100, 200, 300];

const updatedPrices = prices.map(price => price + price * 0.18);
console.log(updatedPrices);
```

---

### filter()

Used to filter required values.

```js
const numbersList = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbersList.filter(num => num % 2 === 0);
console.log(evenNumbers);
```

---

### reduce()

Used to calculate a single value.

```js
const cart = [500, 1000, 1500];

const totalAmount = cart.reduce((total, item) => total + item, 0);
console.log(totalAmount);
```

---

### find()

Used to find a single item.

```js
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const user = users.find(u => u.id === 2);
console.log(user);
```

---

## Summary

* Destructuring simplifies data access
* Spread and rest operators reduce extra code
* Array methods help manage data efficiently
