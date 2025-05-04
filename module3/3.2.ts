{
    //
    // oop - inheritence
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHour: number) {
            console.log(`${this.name} sleeps ${numOfHour} hour`)
        }
    }


    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    const student1 = new Student("Rakat", 21, "Rangpur")
    student1.getSleep(8)


    class Teacher extends Parent {
        designation: string
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} takes class of ${numOfClass} subject`)
        }
    }

    const teacher1 = new Teacher("Rahim", 41, "Rangpur", "Instructor")
    teacher1.takeClass(2)











    //
}