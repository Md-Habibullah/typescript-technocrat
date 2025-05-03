{
    //
    // generic type

    type Generic<T> = Array<T>;

    const roll: Generic<number> = [1, 2, 3]
    const name: Generic<string> = ["st1", "st2", "st3"]
    const present: Generic<boolean> = [true, false, true]

    const user: Generic<{ name: string, age: number }> = [
        {
            name: "Rahim",
            age: 20
        },
        {
            name: "Rakoon",
            age: 20
        }
    ]

    // Generic Tuple
    type GenericTuple<T1, T2> = [T1, T2]
    const manus: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"]
    const manus2: GenericTuple<string, number> = ["Mr. Z", 50]
    const user2: GenericTuple<number, { name: string, email: string }> = [
        101,
        { name: "Habib", email: "habib@gmail.com" }
    ]


    //
}