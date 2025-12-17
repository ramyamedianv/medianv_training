// Array Destructuring

let numbers=[2,4,5];

const [a,b,c]=numbers;
console.log('Array Destructuring..')
console.log(a,b,c);

// Skipping Elements

const colors=["red","green","blue"];
const [firstCol, , thirdCol] = colors;
console.log('Skipping Elements..')
console.log(firstCol,thirdCol); 

// Default Values

const score=[50];
const [math,science=70]=score;
console.log('Default Values..')

console.log(math,science);

// Rest Operator in Array Destructuring

const marks=[60,70,80,90,85];
console.log('Rest Operator in Array Destructuring..')
const [first, ...remaining]=marks;

// Nested Array Destructuring

const data = [1, [2, 3], 4];
const[one,[two,three],four]=data;

console.log(one,two,three,four);

// Object Destructuring

const user = {
  name: "Ramya",
  age: 22
};

const { name, age } = user;
console.log('Object Destructuring');
console.log(name); 
console.log(age);  

// Renaming Variables

const product = {
  title: "Mobile",
  price: 15000
};

const { title:productName,price:productPrice } = product;
console.log('Renaming Variables');
console.log(productName);  
console.log(productPrice); 

// Default Values

const settings={
    theme:'dark'
}
const {theme,language="English"}=settings;
console.log("Default Values object"); 

console.log(language); 


//  Rest Operator in Object Destructuring
const employee = {
  id: 1,
  name: "Anita",
  role: "HR",
  salary: 40000
};

const {id,name:empName,...otherDetails}=employee;
console.log('Rest Operator in Object Destructuring')
console.log(id,empName,otherDetails);

// Nested Object Destructuring

const student = {
  name: "Kiran",
  marks: {
    math: 90,
    science: 85
  }
};

const {marks:{math:mathSco,science:scienceSco}}=student;
console.log('Nested Object Destructuring');
console.log(mathSco)

// Parameter Destructuring (Function Destructuring)

function displayUser({ name, age }) {
  console.log(name, age);
}
console.log('Parameter Destructuring (Function Destructuring)');
displayUser({ name: "Sita", age: 25 });
