// Define a base class Shape
class Shape {
    // Method to calculate area, not implemented in base class
    area() {
        return "Area formula not defined.";
    }
}

// Define a Circle class that extends Shape
class Circle extends Shape {
    // Constructor takes radius as parameter
    constructor(radius) {
        super(); // Call the parent class constructor
        this.radius = radius; // Set the radius property
    }

    // Override area method to calculate area of circle
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Define a Rectangle class that extends Shape
class Rectangle extends Shape {
    // Constructor takes width and height as parameters
    constructor(width, height) {
        super(); // Call the parent class constructor
        this.width = width; // Set the width property
        this.height = height; // Set the height property
    }

    // Override area method to calculate area of rectangle
    area() {
        return this.width * this.height;
    }
}

// Create an array of shapes: a Circle and a Rectangle
const shapes = [
    new Circle(5),    // Create a Circle with radius 5
    new Rectangle(4, 6) // Create a Rectangle with width 4 and height 6
];

// Iterate over each shape and print its area
shapes.forEach(shape => {
    console.log(shape.area()); // Call area method and print result
});
// Output:
// 78.53981633974483 (area of circle)
// 24 (area of rectangle)
