class Circle {
  
  constructor(radius) {
    this.pi = 3.14;
    this.radius = radius;
  }

  get getCircleRadius() {
    return this.radius;
  }

  get getCircleDiametr() {
    return this.radius * 2;
  }

  set setCircleRadius(newRadius) {
    this.radius = newRadius;
  }

  calculateCircleArea() {
    return (this.pi * (this.radius ** 2)).toFixed(2);
  }

  calculateCircleLength() {
    return (2 * this.pi * this.radius).toFixed(2); 
  }
}

const smallCircle = new Circle(2); // radius - 2 m

console.log(smallCircle.getCircleRadius);
console.log(smallCircle.getCircleDiametr);
smallCircle.setCircleRadius = 5;
console.log(smallCircle.getCircleRadius);
console.log(smallCircle.getCircleDiametr);
console.log(smallCircle.calculateCircleArea());
console.log(smallCircle.calculateCircleLength());