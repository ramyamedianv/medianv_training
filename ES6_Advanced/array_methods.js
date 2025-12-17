//map

const arr=[1,2,3,4,5];
const doubleArr=arr.map(a=>a*2);
console.log(doubleArr);

//filter

const ages=[15,20,18,19,25,30,35,10];
const adults =ages.filter(age=> age>=18);
console.log(adults);

//reduce

const prices=[10,50,30,100];
const totalPrices=prices.reduce((total,p)=>total+p,0);
console.log(totalPrices);

// forEach

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit=>{
    console.log(fruit);
})

// find

const users = [
  { id: 1, name: "Ramya" },
  { id: 2, name: "Anita" }
];

const user=users.find(u=>u.id===2);
console.log(user);

//some 
const marks=[30,40,70,29];
const hassPassed=marks.some(m=>m>35);
console.log(hassPassed);

//includes

console.log(fruits.includes("Apple"));
