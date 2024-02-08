class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(`Shape Name: ${this.name}`)
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name)
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height; 
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
square.logName();

const cir = new Circle('Cir 1', 30);
cir.logName();

// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());