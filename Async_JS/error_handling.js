/*
Error handling is the process of managing and responding to errors that occur during program execution,
 so the application does not crash and can handle failures gracefully
 */

 try {
    let res=10/x;
    console.log(res);
    
 } catch (error) {
    console.log(error.message);
    
 }

 function getData() {
  return new Promise((resolve, reject) => {
    reject("Data fetch failed");
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


  async function fetchUser() {
  try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error.message);
  }
}

fetchUser();
