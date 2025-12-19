//Optional properties are used when an object may or may not contain a specific property.
var user1 = {
    id: 1,
    name: 'ramya',
};
var user2 = {
    id: 2,
    name: 'vidya',
    email: 'v@gmail.com'
};
var p1 = { id: 1, name: 'laptop' };
var p2 = { id: 2, name: 'mobile', discount: 10 };
function greet(name, message) {
    if (message) {
        console.log("".concat(message, ", ").concat(name));
    }
    else {
        console.log("Hello, ".concat(name));
    }
}
greet("Ramya");
greet("Ramya", "Welcome");
