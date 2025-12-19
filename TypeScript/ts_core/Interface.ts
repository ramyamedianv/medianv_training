interface User{
    id:number,
    name:string,
    email:string
}

let user1:User={
    id:1,
    name:'ramya',
    email:'ramya@gmail.com',
}


//optional property 
interface User1{
    id:number,
    name:string,
    email?:string,
}


const user2:User1={
    id:2,
    name:"vidya"
}

//Interface with Methods

interface AuthUser{
    email:string;
    login():void;
}

const user:AuthUser={
    email:'ramya@gmail.com',
    login(){
        console.log('Logged in');
    }
}

interface Person{
    name:string;
    age:number;
}

interface Employee extends Person{
    empId:number;
}

const emp:Employee={
    name:'ramya',
    age:23,
    empId:104
}


export {};