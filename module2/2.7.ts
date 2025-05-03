{
    //
    // generic constraints with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = "bike" | "car" | "ship";
    type Owner2 = keyof Vehicle;

    const person1: Owner1 = "bike";
    const person2: Owner2 = "car"


    //
}