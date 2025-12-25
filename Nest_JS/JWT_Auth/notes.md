# JWT Authentication – Notes

## What is JWT Authentication

JWT (JSON Web Token) authentication is a stateless authentication mechanism used to securely verify users.
Instead of storing session data on the server, all required user information is stored inside a signed token.

A JWT consists of three parts:

* Header – Token type and algorithm
* Payload – User data (claims)
* Signature – Ensures token integrity

---

## Why JWT is Used

* Stateless authentication (no server-side session storage)
* Scales well for large applications
* Works well with REST APIs and microservices
* Secure when combined with HTTPS

---

## JWT Authentication Flow

1. User sends login credentials (email/password)
2. Server validates the credentials
3. Server generates a JWT using a secret key
4. JWT is sent back to the client
5. Client stores the token (localStorage / cookies)
6. Client sends JWT in `Authorization` header for protected requests
7. Server verifies the token before allowing access

If the token is invalid or expired, access is denied.

---

## JWT Flow Diagram (Text Representation)

* Client → Login Request
* Server → Validate Credentials
* Server → Generate JWT
* Client → Store JWT
* Client → Send JWT with API Requests
* Server → Verify JWT → Allow or Reject

---

## What are Guards in NestJS

Guards are used to **control access to routes**.
They run **before** the route handler and decide whether the request should proceed.

Guards are commonly used for:

* Authentication
* Authorization
* Role-based access control

---

## JWT Guard in NestJS

A JWT guard checks whether:

* A token exists in the request
* The token is valid
* The token is not expired

If validation passes, the request is allowed. Otherwise, an `UnauthorizedException` is thrown.

---

## What is Passport in NestJS

Passport is an authentication middleware used by NestJS to handle different authentication strategies.

NestJS integrates Passport using:

* `@nestjs/passport`
* `passport`

Passport helps separate authentication logic from business logic.

---

## Passport Strategy

A Passport strategy defines **how authentication is performed**.

Common strategies include:

* Local Strategy – Username and password login
* JWT Strategy – Token-based authentication
* OAuth Strategy – Google, GitHub login

---

## JWT Passport Strategy

JWT strategy is responsible for:

* Extracting JWT from request headers
* Verifying the token using secret key
* Attaching user data to the request object

Once verified, the user becomes available as `request.user`.

---

## Flow Using Guard and Passport Strategy

1. Client sends request with JWT
2. Guard intercepts the request
3. Guard triggers Passport JWT strategy
4. Strategy validates the token
5. If valid → request proceeds
6. If invalid → access denied

---

## Advantages of Using Guards with Passport

* Clean separation of concerns
* Reusable authentication logic
* Centralized security handling
* Easy to extend with roles and permissions

---

## Summary

JWT authentication provides a secure and scalable way to protect APIs.
Guards ensure only authorized requests reach controllers, while Passport strategies handle token validation.
Together, they form a robust authentication system in NestJS applications.

---

## File Information

* File Name: `notes.md`
* Topic: JWT Authentication
* Includes: JWT Flow, Guards, Passport Strategy
