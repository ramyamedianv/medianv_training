"use strict";
/*
TypeScript is a superset of JavaScript that adds static typing.
It helps catch errors at compile time instead of runtime.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* Basic Data types*/
//Number
var age = 23;
var price = 30.455;
//String
var username = "ramya";
var greetings = "Hello ".concat(username);
//boolean
var isLoggedIn = true;
var isAdmin = false;
//any->use when you don't know the type 
var data = 10;
data = true;
data = "ramya";
//unknown->better to use when we don't know the type it force s to check type any operation
var Data = "hello";
if (typeof Data === "string") {
    Data.toUpperCase();
}
//void ->used when function does not return anything
function logMessage() {
    console.log("this function return anything");
}
//never->function that neve ends or throwa error
function throwError(msg) {
    throw new Error(msg);
}
throwError("it always throw an error");
