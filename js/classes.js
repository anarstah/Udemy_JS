class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectanglesWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text : ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10),
    long = new Rectangle(10, 100),
    div = new ColoredRectanglesWithText(25, 10, 'Hello world', 'red');

// console.log(square.calcArea());
// console.log(long.calcArea());

div.showMyProps();
console.log(div.calcArea());