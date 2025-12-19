# Task 5: TypeScript Basics

## String Type

```ts
let userName: string = "Ramya";
let greeting: string = "Welcome to TypeScript";
````

## Boolean Type

```ts
let isActive: boolean = true;
let isCompleted: boolean = false;
```

## Variables

TypeScript allows variables to be declared using `let` and `const` with type annotations.

```ts
let score: number = 88;
score = 92;

const country: string = "India";
```

Type inference automatically assigns types when not explicitly defined.

```ts
let count = 10;
let city = "Hyderabad";
```

## Arrays

Arrays in TypeScript store multiple values of the same type.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Mango"];
```

Alternative array syntax:

```ts
let marks: Array<number> = [70, 80, 90];
```

## Objects

Objects represent structured data with defined property types.

```ts
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Ramya",
  age: 22,
  isAdmin: true
};
```

Object with optional property:

```ts
let product: {
  id: number;
  name: string;
  price?: number;
} = {
  id: 101,
  name: "Laptop"
};
