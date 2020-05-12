class Shape {
    get area() {
        return this.calculateArea();
    }
    get perimeter() {
        return this.calculatePerimeter();
    }
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = $('<div class="shape"></div>');
        this.makeShape();
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        const height = this.height;
        const width = this.width;
        return (height + width) * 2
    }
    genPosition(offset) {
       return Math.floor(Math.random() * (600 - offset));
        
    }
    makeShape() {
        this.div.css({
            height: `${this.height}px`,
            width: `${this.width}px`,
            top: this.genPosition(this.height),
            left: this.genPosition(this.width),
        });
        $('#canvas').append(this.div);
    }
    sidepanelInfo() {
        $('#sdpnShapeName').val(this.div.attr('id'));
        $('#sdpnWidth').val(this.width);
        $('#sdpnHeight').val(this.height);
    }
    triggers() {
        this.div.click(() => this.sidepanelInfo());
        this.div.dblclick(() => this.bye());
    }
    bye() {
        this.div.remove();
        $('.form-control').val('');
    }
}

class Square extends Shape {
    constructor(sideLength) {
        sideLength = $('.sideLength').val();
        super(sideLength, sideLength);
        this.div.attr('id', 'square');
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
    calculateArea(radius) {
        // const radius = this.width / 2;
        return Math.PI * radius * radius;
    }
    calculatePerimeter(radius) {
        return 2 * Math.PI * radius
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
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
        super(width, height);
    }
}
new Square(200);
new Circle(150);

// $('#squareBtn').click(function (event) {
//     event.preventDefault();
//     console.log(sideLength);
//     new Square();
//         $('#canvas').append(new Square)
// })

