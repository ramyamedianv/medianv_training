/*
A  callback is function passed as an argument to anoter funtion 
and executed after task completed.
callback are commonly used for asynchronous operationa like times,Api calls, or file handling

Too many nested callbacks lead to callback hell, making code hard to read and maintain

*/

//Example 

function first(callback){
    console.log("first function executed");
    callback();
}

function second(){
    console.log("second function executed");
}

first(second);


//callback hell example

setTimeout(()=>{
    console.log("step1");
    setTimeout(()=>{
        console.log("step2");
        setTimeout(()=>{
            console.log("step3");
            setTimeout(()=>{
                console.log("step4")
            },1000)
        },1000)
    },1000)

},1000);