// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     logName() {
//         console.log(`Shape Name: ${this.name}`)
//     }
// }

// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name)
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height; 
//     }

//     perimeter() {
//         return 2 * (this.width + this.height);
//     }

//     isSquare() {
//         return this.width === this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(name, radius) {
//         super(name);
//         this.radius = radius;
//     }
// }

// const square = new Rectangle('Square', 20, 20);
// console.log(square);
// square.logName();

// const cir = new Circle('Cir 1', 30);
// cir.logName();

// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());

// class App {
//     constructor() {
//         this.serverName = 'localhost';

//         document.querySelector('button').addEventListener(onclick, this.getServerName.bind(this))
//     }

//     getServerName() {
//         console.log(this.serverName);
//     }
// }

// const app = new App();

// Getter and Setter example

// class Person {
//     constructor(firstName, lastName) {
//         this._firstName = firstName; 
//         this._lastName = lastName;
//     }
//     // Designed to purposefully avoid the user from having access to original values
//     get firstName() {
//         return this.capitalizeFirst(this._firstName);
//     }
//     // Designed to purposefully let the user change the value without having to access original values
//     set firstName(value) {
//         this._firstName = this.capitalizeFirst(value);
//     }

//     get lastName() {
//         return this.capitalizeFirst(this._lastName);
//     }
//     // Designed to purposefully let the user change the value without having to access original values
//     set lastName(value) {
//         this._lastName = this.capitalizeFirst(value);
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     capitalizeFirst(value){
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     }
// }

//This is creating a getter and setter using a class with the Object.defineProperty
function Person(firstName, lastName) {
    
    this._firstName = firstName; 
    this._lastName = lastName;
    
    Object.defineProperty(this, 'firstName', {
        get: () => this.capitalizeFirst(this._firstName),

        set: (value) => this._firstName = value
    })
    
    Object.defineProperty(this, 'lastName', {
        get: () => this.capitalizeFirst(this._lastName),

        set: (value) => this._lastName = value
    })

     
    Object.defineProperty(this, 'fullName', {
        get: () => this.firstName + ' ' + this.lastName
    })
}

Person.prototype.capitalizeFirst = (value) => value.charAt(0).toUpperCase() + value.slice(1);


//Using an object literal to add a getter and setter
const PersonObj = {
    _firstName: 'jane',
    _lastName: 'doe',

    get firstName() {
       // You can only use this because it was created as a Prototype outside of the object definition 
       return Person.prototype.capitalizeFirst(this._firstName)
    },

    set firstName(value) {
        this._firstName = value
    },
   
    get lastName() {
        return Person.prototype.capitalizeFirst(this._lastName)
    },

    set lastName(value) {
        this._lastName = value
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

const person2 = Object.create(PersonObj)
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);
