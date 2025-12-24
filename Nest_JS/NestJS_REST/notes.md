# NestJS REST APIs – CRUD, DTOs, Validation Pipes

## Task Overview

This notes file covers the basics of building REST APIs using NestJS.  
It explains CRUD operations, DTOs, and validation pipes with simple examples.  
This task focuses on writing clean, structured, and validated backend APIs.

---

## What is a REST API in NestJS

A REST API allows client applications (frontend or mobile) to communicate with the backend using HTTP methods.

Common HTTP methods:

- GET – Fetch data
- POST – Create data
- PUT / PATCH – Update data
- DELETE – Remove data

NestJS uses **controllers** to define REST endpoints.

---

## CRUD Operations in NestJS

CRUD stands for Create, Read, Update, and Delete.

---

### Create (POST)

Used to add new data.

```ts
@Post()
createUser(@Body() userData: any) {
  return 'User created';
}
