# Task 8: NestJS Fundamentals


## Overview

This task focuses on understanding the core fundamentals of NestJS, a progressive Node.js framework used for building efficient, scalable, and maintainable server-side applications. The task covers NestJS introduction, CLI usage, core building blocks, dependency injection, and lifecycle methods.


## 1. Introduction to NestJS

NestJS is a framework built on top of Node.js that uses TypeScript by default.  
It is inspired by Angular and follows a modular, structured architecture.

Key benefits:
- Strong support for TypeScript
- Modular architecture
- Built-in Dependency Injection
- Easy to test and scale applications


## 2. NestJS CLI

The NestJS CLI helps in creating and managing projects efficiently.

Common CLI commands:
- `nest new project-name` – Create a new NestJS project
- `nest generate module module-name` – Generate a module
- `nest generate controller controller-name` – Generate a controller
- `nest generate service service-name` – Generate a service
- `npm run start:dev` – Run application in development mode


## 3. Modules

Modules are the basic building blocks of a NestJS application.  
Each application has at least one root module (`AppModule`).

Responsibilities:
- Organize application structure
- Group related controllers and services
- Define dependencies

Examples:
- AppModule
- UserModule
- ProductModule


## 4. Controllers

Controllers handle incoming HTTP requests and return responses to the client.

Responsibilities:
- Define routes
- Handle request methods such as GET, POST, PUT, DELETE
- Delegate business logic to services


## 5. Services

Services contain the business logic of the application.

Responsibilities:
- Handle data processing
- Interact with databases or external APIs
- Keep controllers lightweight

Services are typically injected into controllers.


## 6. Dependency Injection (DI)

Dependency Injection is a core feature of NestJS.

Benefits:
- Improves code reusability
- Makes code easier to test
- Reduces tight coupling between components

NestJS uses an internal IoC container to manage dependencies automatically.


## 7. Lifecycle Methods

Lifecycle methods allow developers to execute logic at different stages of the application lifecycle.

Common lifecycle hooks:
- `onModuleInit()` – Called after a module is initialized
- `onModuleDestroy()` – Called before a module is destroyed
- `beforeApplicationShutdown()` – Triggered during application shutdown

Use cases:
- Initializing resources
- Closing database connections
- Logging application events

## Conclusion

Task 8 provides a solid foundation in NestJS fundamentals, including project setup using the CLI, modular architecture, controllers, services, dependency injection, and lifecycle hooks. These concepts are essential for building scalable and maintainable backend applications using NestJS.
