// class Animal {
//     constructor(name, type, noise) {
//       this.name = name;
//       this.type = type;
//       this.noise = noise;
//     }
  
//     // Methods
//     makeNoise() {
//       console.log('I go', this.noise);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name, type, noise) {
//       super(name, type, noise);
//     }
//   }
  
//   const dog = new Dog('Wally', 'Golden Retriever', 'Woof');
  
//   dog.makeNoise();



// //   Exercise 1

// function global () {
//     console.log(this)
// }
// global()

// let obj1 = {
//     function1 (num) {
//         this.num = 3
//         console.log(this.name)
//     }
// }
// function1 (3)
// Come back to this


// Exercise 2

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet () {
//         console.log(`${this.name} says Hello`)
//     }
// }

// const Hi = new Person('Tim', 22);
// const Hi2 = new Person ('Tom',23)
// Hi.greet();
// Hi2.greet();

// Exercise 3

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet () {
//         console.log(`${this.name} says Hello`)
//     }
// }

// const Hi = new Person('Tim', 22);
// const Hi2 = new Person ('Tom',23)
// Hi.greet();
// Hi2.greet();


// Exercise 4






// Exercise 5

class Person {
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    greet () {
        console.log(`${this.name} says Hello`)
    }

    get age () {
        return this.age
    }

    set age(value) {
        if (value < 0) {
            console.log("Age can't be negative")
        } else {
            this.#age = value;
        }
    }
}

const num = new Person ('Tim', 22);
num.age = -2


// Exercise 6
