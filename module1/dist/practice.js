"use strict";
var _a, _b;
//! string
let firstName = "habib";
//! number
let num = 143;
//! boolean
let bool = true;
//! undefined & null
let x = undefined;
let y = null;
//! any type
let d;
d = "halim";
d = 123;
//!  not any
let e;
//!! Array
let friends = ["A", "B"];
let eligibleRollNumbers = [1, 2, 3];
//! Tuple -> Array -> Order -> types of values
let coordinates = [1, 5];
let ageName = [19, 'Rony'];
//! Object
const user = {
    firstName: "Rakib",
    middleName: "Ahsan",
    lastName: "Rajib"
};
const user2 = {
    name: "Habib",
    age: 22,
    companyName: "Programming Hero"
};
//!normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
//!arrow function
const add2 = (num1, num2 = 20) => {
    return num1 + num2;
};
//! method
const poorUser = {
    name: "habib",
    balance: 0,
    addBalance(balance) {
        return `my balance is : ${this.balance + balance}`;
    }
};
//! map + callback
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
const students1 = {
    name: "Rahim",
    age: 19,
    gender: "male",
    contractNumber: "01717000000"
};
const students2 = {
    name: "RahimMia",
    age: 19,
    gender: "male",
    contractNumber: "01717000000"
};
const students3 = {
    name: "Rahima Akter",
    age: 17,
    gender: "female"
};
const add3 = (num1, num2) => num1 + num2;
//! Union type
{
    const newDeveloper = "Pro";
}
//! Intersection
{
    const fullStackDeveloper = {
        skill: ["html", "css", "express"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    };
}
{
    //! ternary operator || optional chaining || nullish coalescing operator
    const age = 20;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAdult });
}
//! nullish coalescing operator
//! null | undifined --> decision making
const isAuthenticate = undefined;
const result1 = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
const result2 = isAuthenticate ? isAuthenticate : "Guest"; // not same as nullish operator
console.log({ result1 });
console.log({ result2 });
{
    const user = {
        name: "Roton",
        address: {
            city: "Rangput",
            road: "1203",
            presentAddress: "Rangpur"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Adress"; // optional chaining + nullish type
    console.log({ permanentAddress });
}
