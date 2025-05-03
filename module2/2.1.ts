{
    //

    // type assertion
    let anything: any;

    anything = "Next Level Web Development";
    anything = 234;
    (anything as number)

    const kgToGram = (value: (string | number)): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value)
            return `the gram is : ${convertedValue * 1000}`;
        }
        else if (typeof value === "number") {
            const convertedValue = value * 1000;
            return convertedValue;
        }
    }

    const result1 = kgToGram(500) as number;
    const result2 = kgToGram("550") as string;

    type CustomError = {
        message: string
    }

    try {
    } catch (error) {
        console.log((error as CustomError).message)
    }
    //
}