/*
TypeScript is a superset of JavaScript that adds static typing.
It helps catch errors at compile time instead of runtime.
*/

/* Basic Data types*/

//Number

let age:number=23;
let price:number=30.455;

//String

let username:string="ramya"
let greetings:string=`Hello ${username}`;

//boolean
let isLoggedIn:boolean=true;
let isAdmin:boolean=false;

//any->use when you don't know the type 

let data:any=10;
data=true;
data="ramya";

//unknown->better to use when we don't know the type it force s to check type any operation

let Data:unknown="hello";
if(typeof Data==="string"){
  Data.toUpperCase();
}


//void ->used when function does not return anything

function logMessage():void{
  console.log("this function return anything");

}

//never->function that neve ends or throwa error

function throwError(msg:string):never{
  throw new Error(msg);
}

throwError("it always throw an error");


export {};
