"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.greet = function () {
        return "Hello,my name is".concat(this.name);
    };
    return student;
}());
var s1 = new student('ramya', 23);
console.log(s1.greet());
//short hand constructor 
var User = /** @class */ (function () {
    function User(name, password, role) {
        this.name = name;
        this.password = password;
        this.role = role;
    }
    return User;
}());
