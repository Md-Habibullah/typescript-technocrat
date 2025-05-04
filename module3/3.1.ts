{
    //
    //
    class Animal {
        // public name: string;
        // public spacies: string;
        // public sound: string;

        // parameter properties
        // everything will work fine if we use //! public in parameter.
        // everything will be same as before

        constructor(public name: string, public spacies: string, public sound: string) {
            // this.name = name;
            // this.spacies = spacies;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`the ${this.name} says ${this.sound} `)
        }
    }

    const dog = new Animal("German Shephard", "dog", "Ghew Ghew");
    const cat = new Animal("Ontu", "cat", "Meaw Meaw");

    cat.makeSound()


    //
}