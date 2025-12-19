//objects in ts

//basic object

let user:{
    id:number;
    name:string;
    isActive:boolean;
}={
    id:1,
    name:'ramya',
    isActive:true
}

//Optional Properties

let employee:{
    id:number;
    name:string;
    email?:string;
}={
    id:2,
    name:'ramya'
}

//readonly properties

let product:{
    readonly id:number;
    name:string;
}={
    id:1,
    name:"laptop",
}


//Nested objects 

let order:{
    orderId:number;
    custumer:{
        name:string;
        phone:number;
    }
}={
    orderId:45,
    custumer:{
        name:"ramya",
        phone:9999999999

    }
}


//type aliases

type User={
    id:number;
    name:string;
    email:string;
}

let user1:User={
    id:3,
    name:'ramya',
    email:'ramya@gmail.com'

}

let user2:User={
    id:4,
    name:'vidya',
    email:'vidya@gmail.com'
}

export {};