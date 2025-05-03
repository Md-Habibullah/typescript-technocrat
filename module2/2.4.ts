{   //
    // type Developer<T> = {
    //     name: string;
    //     computer: {
    //         brand: string;
    //         model: string;
    //     },
    //     smartWatch: T
    // }

    // Generic with Interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
        },
        smartWatch: T,
        bike?: X
    }

    type WatchProperty1 = {
        brand: string;
        model: string;
        display: string
    }
    const poorDeveloper: Developer<WatchProperty1> = {
        name: "Rony",
        computer: {
            brand: "Intel",
            model: "Core I5"
        },
        smartWatch: {
            brand: "Symphony",
            model: "S500I",
            display: "IPS"
        }
    }

    interface WatchProperty2 {
        brand: string;
        model: string;
        display: string;
        heartBitTrack: boolean;
        sleepTrack: boolean;
    }

    interface BikeProperty {
        brand: string;
        model: string
    }

    const richDeveloper: Developer<WatchProperty2, BikeProperty> = {
        name: "Rakib",
        computer: {
            brand: "Macbook",
            model: "Air 2pro"
        },
        smartWatch: {
            brand: "Apple",
            model: "A500I",
            display: "OLED",
            heartBitTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "Yamaha",
            model: "R15"
        }
    }

    //
}