{
    //
    // constraints

    const addCourseToStudents = <T>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const addeCourse = addCourseToStudents({
        id: 101,
        name: "Habib",
        email: "Habibullahbmw@gmail.com",
        devType: "NLWD"
    })
    const addeCourse2 = addCourseToStudents({
        id: 102,
        name: "Habibullah",
        email: "habibullah15160@gmail.com",
        hasWatch: "Apple"
    })

    const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q) => {
        return obj[key]
    }

    const user = {
        name: "Habib",
        age: 52
    }
    const leptop = {
        brand: "Asus",
        model: "E65"
    }

    const result = getPropertyValue(user, "name")



    //
}