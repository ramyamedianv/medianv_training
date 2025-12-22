//Optional properties are used when an object may or may not contain a specific property.

interface User{
    id:number,
    name:string,
    email?:string
}

const user1:User={
    id:1,
    name:'ramya',

}

const user2:User={
    id:2,
    name:'vidya',
    email:'v@gmail.com'
}

type Product = {
  id: number;
  name: string;
  discount?: number;
};

const p1:Product={id:1,name:'laptop'}
const p2:Product={id:2,name:'mobile',discount:10}


function greet(name: string, message?: string) {
  if (message) {
    console.log(`${message}, ${name}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}
greet("Ramya");
greet("Ramya", "Welcome");



export {};