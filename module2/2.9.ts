{
    //
    // Conditional Type
    type A1 = number;
    type A2 = undefined;

    type B1 = A1 extends null ? true : false;
    type B2 = A1 extends null ? true : A2 extends undefined ? undefined : null;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    type CheckVehicles<T> = T extends keyof Sheikh ? true : false;

    type hasVehicles = CheckVehicles<"plane">


    //
}