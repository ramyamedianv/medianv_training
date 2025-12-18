/*
A Promise is an object that represents the eventual completion or failure of 
an asynchronous operation.
A Promise allows you to handle asynchronous results in a more readable and 
manageable way compared to callbacks

A Promise can be in one of three states:

Pending
Fulfilled
Rejected

The asynchronous operation failed

The Promise has a reason (error)
*/


const fetchData=new Promise((res,rej)=>{
    let success=false;
    if(success){

        res('Data fetched successfully');
    }
    else{
        rej("Failed to fetch data")
    }
})

fetchData.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

/*
Explanation

The Promise starts in the pending state

If resolve() is called → Promise becomes fulfilled

If reject() is called → Promise becomes rejected

.then() handles success

.catch() handles errors

*/