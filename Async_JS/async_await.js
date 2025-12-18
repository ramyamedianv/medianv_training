/*
used before function,Always return promise ,if the function return value ,it is automatically
wrapped in promise 
*/

async function greet(){
    return "Hello World";
}

greet().then(res=>{
    console.log(res)
})


// basic async/await Example

function getData(){
    return new Promise((resolve)=>{
        resolve("Data Fetched successfully");
    })
}

async function fetchData() {
    console.log('data fetching....');
    const res=await getData();
    console.log(res);
    
}
fetchData();