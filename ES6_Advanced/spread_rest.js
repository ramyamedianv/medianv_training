// Spread Operator Coding Examples
// __Copy Array (Avoid Mutation)

const arr = [1, 2, 3];
const copiedarr = [...arr];
copiedarr.push(4);
console.log(arr); 
console.log(copiedarr); 

// __ Merge Arrays

const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];
console.log(fullStack);

// __Update Object Without Changing Original
const user = {
  name: "Ramya",
  role: "Developer"
};

const updatedUser = {
  ...user,
  role: "Associate FullStack Developer"
};

console.log(updatedUser);

// Rest Operator Coding Examples

const scores = [90, 85, 88, 92];

const [first, second, ...others] = scores;

console.log(first,second,others);

// ___Function with Unlimited Arguments

function calculate(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculate(100, 200, 300));

// __Separate User Info

const employee = {
  id: 1,
  name: "Ramya",
  department: "IT",
  salary: 20000
};

const { salary, ...publicInfo } = employee;

console.log(publicInfo);


