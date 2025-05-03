{
    //
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string };
    interface UserWithRole2 extends User1 { role: string }

    const user1: UserWithRole1 = {
        name: "Habib",
        age: 22,
        role: "dev"
    }


    // for array

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber: Roll2 = [14, 17, 22]

    // for function
    type Add1 = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2
    //
}