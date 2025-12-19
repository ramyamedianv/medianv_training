"use strict";
/*
In TypeScript, variables are used to store data values. TypeScript adds types to variables to ensure
type safety
*/
Object.defineProperty(exports, "__esModule", { value: true });
//let
var age = 25;
age = 26; // allowed
// age = "twenty";  error
//const
var PI = 3.14;
// PI = 3.15  error
//Type Inference->TypeScript automatically detects type.
var city = "Hyderabad"; // inferred as string
