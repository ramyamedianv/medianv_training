//Generics Function
function identify(input) {
    return input;
}
identify(10);
identify('Hello');
//generics with arrays
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 4, 6, 7]);
getFirstElement(["a", "b", "c"]);
var userResp = {
    data: {
        name: 'ramya',
        age: 23,
    },
    status: 200,
};
