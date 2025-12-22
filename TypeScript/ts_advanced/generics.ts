//Generics Function

function identify<T>(input:T):T{
    return input;
}

identify<number>(10);
identify<String>('Hello');

//generics with arrays

function getFirstElement<T>(arr:T[]):T{
    return arr[0];
}

getFirstElement<number>([1,2,4,6,7]);
getFirstElement<string>(["a","b","c"]);


//generics with Interface

interface apiResp<T>{
    data:T,
    status:number
}

const userResp:apiResp<{name:string,age:number}>={
    data:{
        name:'ramya',
        age:23,
    },
    status:200,
}