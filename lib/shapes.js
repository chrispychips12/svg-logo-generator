
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


