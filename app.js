class Shape {
    get area() {
        return this.calculateArea();
    }
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    
}
class Square extends Shape {
    constructor(sideLength) {
        super();
    }
    resize(sideLength) {
        super.resize();
    }
    calculateArea() {
        const sideLength = this.sideLength;
        return sideLength * sideLength
    }
    calculatePerimeter() {
        const sideLength = this.sideLength
        return sideLength * 4
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
    }
    resize(radius) {
        super.resize(2 * radius, 2 * radius);
    }
    calculateArea() {
        const radius = this.width / 2;
        return Math.PI * radius * radius;
    }
}
class Triangle extends Shape {
    constructor(height) {
        super();
    }
    resize(height) {
        super.resize();
    }
    calculateArea() {
        const height = this.height
        return (height * height) / 2;
    }
    calculatePerimeter() {
        const height = this.height
        const hypot = height * 1.41421356237
        return (height * 2) + hypot;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
    }
    resize(height, width) {
        super.resize();
    }
    calculateArea() {
        return this.width * this.height;
    }
calculatePerimeter() {
    const height = this.height;
    const width = this.width;
    return (height + width) * 2
}
}