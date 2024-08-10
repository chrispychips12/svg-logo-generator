
// Shapes import
const { Triangle, Circle, Square } = require('./shapes');

// Test the Triangle class
test('Triangle render method should return a valid SVG for a blue triangle', () => {
  // New Triangle instance
  const shape = new Triangle();
  // Set the color to blue
  shape.setColor('blue');
  // Check if the render method returns the correct SVG string
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test the Circle class
test('Circle render method should return a valid SVG for a red circle', () => {
  // Ne Circle instance
  const shape = new Circle();
  // Set the color to red
  shape.setColor('red');
  // Check if the render method returns the correct SVG string
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Test the Square class
test('Square render method should return a valid SVG for a green square', () => {
  // New Square instance
  const shape = new Square();
  // Set the color to green
  shape.setColor('green');
  // Check if the render method returns the correct SVG string
  expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
