class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  static calculate(forma) {
    if (forma instanceof Square) {
      return forma.side ** 2;
    } else if (forma instanceof Rectangle) {
      return forma.width * forma.height;
    } else if (forma instanceof Circle) {
      return Math.PI * (forma.radius ** 2);
    } 
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));