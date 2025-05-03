{
    //
    // Utility Type
    // pick type
    type Person = {
        name: string;
        age: number;
        email?: string;
        number: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    // Omit type
    type ContactInfo = Omit<Person, "name" | "age">

    // Require type
    type PersonRequired = Required<Person>

    // Partial Type
    type PersonUnRequired = Partial<Person>

    // Readonly
    type PersonReadOnly = Readonly<Person>;
    const person: PersonReadOnly = {
        name: "Habib",
        age: 22,
        number: "01700000000"
    }

    // Record Type
    // type Obj1 = {
    //     a: string;
    //     b: string
    // }

    type Obj1 = Record<string, string>
    const obj1: Obj1 = {
        a: "str",
        b: "str",
        c: "str"
    }

    const emptyObj: Record<string, unknown> = {}


    //
}