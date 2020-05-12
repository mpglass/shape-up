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
        this.triggers();
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
    triggers() {
        this.div.click(() => this.sidepanelInfo());
        this.div.dblclick(() => this.bye());
    }
    sidepanelInfo() {
        console.log('click', this)
        $('#sdpnShapeName').val(this.div.attr('id'));
        $('#sdpnWidth').val(this.width);
        $('#sdpnHeight').val(this.height);

    }
    bye() {
        this.div.remove();
        console.log('bye click')
        $('.form-control').val('');
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.attr('id', 'square');
    }
    calculatePerimeter() {
        const sideLength = this.width
        return sideLength * 4
    }
    calculateArea() {
        const sideLength = this.width
        return sideLength * sideLength
    }
    sidepanelInfo() {
        super.sidepanelInfo();
        $('#sdpnPerimeter').val(this.calculatePerimeter());
        $('#sdpnArea').val(this.calculateArea());
        $('#sdpnRadius').val('N/A');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
        this.radius = radius
        this.div.attr('id', 'circle');
    }
    calculateArea() {
        const radius = this.width/2;
        return Math.PI * radius * radius;
    }
    calculatePerimeter() {
        const radius = this.width/2;
        return 2 * Math.PI * radius;
    }
    sidepanelInfo() {
        super.sidepanelInfo();
        $('#sdpnPerimeter').val(this.calculatePerimeter());
        $('#sdpnArea').val(this.calculateArea());
        $('#sdpnRadius').val(this.radius);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.attr('id', 'triangle')
        this.div.css({
            height: 0,
            width: 0,
        })
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
    sidepanelInfo() {
        super.sidepanelInfo();
        $('#sdpnPerimeter').val(this.calculatePerimeter());
        $('#sdpnArea').val(this.calculateArea());
        $('#sdpnRadius').val('N/A');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.attr('id', 'rectangle')
    }
    sidepanelInfo() {
        super.sidepanelInfo();
        $('#sdpnPerimeter').val(this.calculatePerimeter());
        $('#sdpnArea').val(this.calculateArea());
        $('#sdpnRadius').val('N/A');
    }
}


$('#squareBtn').click(function (event) {
    event.preventDefault();
    let sideLength = $('.sideLength').val();
    new Square(sideLength);
})

$('#circleBtn').click(function (event) {
    event.preventDefault();
    let radius = $('.radius').val();
    new Circle(radius);
})

$('#triangleBtn').click(function (event) {
    event.preventDefault();
    let height = $('.heightTri').val();
    new Triangle(height);
})

$('#rectangleBtn').click(function (event) {
    event.preventDefault();
    let width = $('.width').val();
    let height = $('.height').val();
    new Rectangle(width, height);
})