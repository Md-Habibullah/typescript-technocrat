{
    //
    // type guard

    type Alphaneumaric = number | string;

    const add = (param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const result = add("2", 3)
    console.log(result)


    // in guard
    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`the user is ${user.role}`)
        } else {
            console.log(`the user is ${user.name}`)
        }
    }

    const user1: NormalUser = {
        name: "MR Normal Bhai"
    };
    const user2: AdminUser = {
        name: "Mr Admin Bhai",
        role: "admin"
    }

    getUser(user2)

    //
}