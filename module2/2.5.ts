{
    //
    // function with generics
    const createArray = (param: string): string[] => {
        return [param]
    };


    const createArray2 = <T>(param: T): T[] => {
        return [param]
    };

    const result1 = createArray("Bangladesh")
    const result2 = createArray2<string>("Bangladesh")

    type CountryType = { name: string, population: string }
    const result3 = createArray2<CountryType>({ name: "Bangladesh", population: "16cr" })


    // with Tuple

    const createArray10 = <T, Q>(param1: T, param2: Q,): [T, Q] => {
        return [param1, param2]
    };

    const result10 = createArray10<string, number>("Bangladesh", 160000000)
    const result11 = createArray10<string, { population: string }>("Bangladesh", { population: "16cr" })


    const addCourseToStudents = <T>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const addeCourse = addCourseToStudents<{ name: string, email: string }>({ name: "Habib", email: "Habibullahbmw@gmail.com" })
    const addeCourse2 = addCourseToStudents<{ name: string, number: number }>({ name: "Habibullah", number: 0o1717562427 })

    //
}