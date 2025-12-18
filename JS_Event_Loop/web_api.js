/*
Web APIs are provided by the browser to handle asynchronous operations without blocking
 JavaScript execution

 */

//  1. setTimeout Web API


console.log("Start");

setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

console.log("End");

/*
Explanation:
The timer runs in Web APIs. After completion, the callback is sent to the Callback Queue.
*/

// 2. setInterval Web API

let count=1;
setInterval(()=>{
    console.log("count interval:",count);
    count++;
},2000);

/*
Explanation:
Runs repeatedly at a fixed time interval using the browser’s Web API.
*/

// 3. DOM Event Web API
/*
document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
  });

  
  Explanation:
The browser listens for the click event. When clicked, the callback is added to the Callback Queue.
*/

// 4. fetch (API Call) Web API

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data));
