
class Shape {
    constructor() {
        this.color = '';
    }
    // Define a base class called Shape
    // This class will be extended by specific shapes like Triangle, Circle, and Square 
    // Initialize the color property which will be set later


    setColor(color) {
        this.color = color;
    }
    // Method to set the color of the shape


    render() {
        throw new Error('You must implement the render() method in the subclass!');
    }
}   // Placeholder method for rendering the shape as an SVG
// This will be overridden by each specific shape class


class Triangle extends Shape {

    render() {

        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a Triangle class that extends Shape
// Override the render method to return the SVG for a triangle
// This SVG element defines a triangle using three points and fills it with the color set


class Circle extends Shape {

    render() {

        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Same as above, but this SVG element defines a circle with a center point (cx, cy) and a radius (r)


class Square extends Shape {

    render() {
        
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Same as above, but this SVG element defines a square using the top-left corner (x, y) and the width/height


module.exports = { Triangle, Circle, Square };

// Export the classes so they can be used in other files