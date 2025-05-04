{
    //
    // instenceof guard or type narrowing
    class Animal {
        name: string;
        spacies: string;

        constructor(name: string, spacies: string) {
            this.name = name;
            this.spacies = spacies
        }

        makeSound() {
            console.log("i am making sound")
        }
    }

    class Dog extends Animal {
        constructor(name: string, spacies: string) {
            super(name, spacies)
        }

        makeBard() {
            console.log('i am barking')
        }
    }
    class Cat extends Animal {
        constructor(name: string, spacies: string) {
            super(name, spacies)
        }

        makeMeaw() {
            console.log('i am meawing')
        }
    }



    // const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //         animal.makeBard();
    //     } else if (animal instanceof Cat) {
    //         animal.makeMeaw();
    //     } else {
    //         animal.makeSound();
    //     }
    // }

    // smart way to handle the function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBard();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog("Dog Bhai", "Dog")
    const cat = new Cat("Cat Bhai", "Cat")

    getAnimal(dog)



    //
}