{
    //
    // map types
    const array: number[] = [1, 2, 3];

    const array2: string[] = array.map(arr => arr.toString())
    console.log('array2:', array2)


    type AreaNum = {
        height: number;
        width: number;
    }
    // type AreaStr = {
    //     height: string;
    //     width: string;
    // }

    // type AreaStr = {
    //     [key in keyof AreaNum]: string;
    // }

    type AreaStr<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaStr<{
        height: string;
        width: number
    }> = {
        height: "100",
        width: 50
    }
    //
}