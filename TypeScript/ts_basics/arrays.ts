//arrays 

//Number Array

let numbers:number[]=[3,4,5,6];
numbers.push(9);

//String Array 

let fruits:string[]=['apple','banana','orange'];

//mixed array union type 

let values:(number|string)[]=[1,"two",3];

//objects 

let students:{id:number,name:string}[]=[{id:1,name:"ramya"}]

//Readonly Array

let scores: readonly number[] = [90, 85, 88];
// scores.push(100); error
