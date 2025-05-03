//! string
let firstName: string = "habib";

//! number
let num: number = 143;

//! boolean
let bool: boolean = true;

//! undefined & null
let x: undefined = undefined;
let y: null = null;

//! any type
let d;
d = "halim";
d = 123

//!  not any
let e: number;


//!! Array
let friends: string[] = ["A", "B"];
let eligibleRollNumbers: number[] = [1, 2, 3];

//! Tuple -> Array -> Order -> types of values
let coordinates: [number, number] = [1, 5];
let ageName: [number, string] = [19, 'Rony'];

//! Object
const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: "Rakib",
    middleName: "Ahsan",
    lastName: "Rajib"
}

const user2: {
    name: string;
    age?: number;
    readonly companyName: "Programming Hero";
} = {
    name: "Habib",
    age: 22,
    companyName: "Programming Hero"
}

//!normal function
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(2, 3)

//!arrow function
const add2 = (num1: number, num2: number = 20): number => {
    return num1 + num2
}

//! method
const poorUser = {
    name: "habib",
    balance: 0,
    addBalance(balance: number): string {
        return `my balance is : ${this.balance + balance}`
    }
}

//! map + callback
const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);

//! type alias
type Students = {
    name: string;
    age: number;
    gender: string;
    contractNumber?: string
}

const students1: Students = {
    name: "Rahim",
    age: 19,
    gender: "male",
    contractNumber: "01717000000"
}
const students2: Students = {
    name: "RahimMia",
    age: 19,
    gender: "male",
    contractNumber: "01717000000"
}
const students3: Students = {
    name: "Rahima Akter",
    age: 17,
    gender: "female"
}

//! func
type Add = (num1: number, num2: number) => number;

const add3: Add = (num1, num2) => num1 + num2;

//! Union type
{
    type FrontendDeveloper = "Noob" | "Pro";
    type BackendDeveloper = "FrontendDeveloper" | "ExpartDeveloper";
    type Developer = FrontendDeveloper | BackendDeveloper;

    const newDeveloper: FrontendDeveloper = "Pro";

    type User = {
        name: string;
        age: number;
        gender: "Male" | "Female";
        bloodGroup: "A+" | "A-" | "B+" | "B-";
    }
}

//! Intersection
{
    type FrontendDeveloper = {
        skill: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper = {
        skill: string[];
        designation2: "Backend Developer"
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skill: ["html", "css", "express"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}

{
    //! ternary operator || optional chaining || nullish coalescing operator
    const age: number = 20;
    if (age >= 18) {
        console.log("adult")
    }
    else { console.log('not adult') }

    const isAdult = age >= 18 ? "Adult" : "Not Adult"
    console.log({ isAdult })
}

//! nullish coalescing operator
//! null | undifined --> decision making
const isAuthenticate = undefined;
const result1 = isAuthenticate ?? "Guest";
const result2 = isAuthenticate ? isAuthenticate : "Guest"; // not same as nullish operator
console.log({ result1 })
console.log({ result2 })

{
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }

    }

    const user: User = {
        name: "Roton",
        address: {
            city: "Rangput",
            road: "1203",
            presentAddress: "Rangpur"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Adress" // optional chaining + nullish type
    console.log({ permanentAddress })
}