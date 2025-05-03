{
    //
    // Basic Promise
    const createPromise = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            const data = true;
            if (data) {
                resolve(data)
            } else { reject("Failt to get the data") }
        })
    }

    const showData = async (): Promise<boolean> => {
        const data: boolean = await createPromise();
        // console.log(data)
        return data
    }
    showData()

    //
    type UserDataType = { userId: number; id: number; title: string; completed: boolean }
    const getTodo = async (): Promise<UserDataType> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await res.json();
        console.log(result)
        return result
    }
    getTodo()
}