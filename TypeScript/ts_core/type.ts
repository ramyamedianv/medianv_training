/* type alias ->used to create custom types  */ 

type User={
    id:number,
    name:string,
}

const user1:User={
    id:3,
    name:'ramya'
}


//union with type

type Id=string|number;

let userId1:Id=322;
let userId2:Id='a34';

//type intersection

type Person={
    name:string;
};

type Employee={
    empId:number
}


type Staff=Person&Employee;

const staff1={
    name:'ramya',
    empId:4,
}

