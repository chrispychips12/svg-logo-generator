// Import the inquirer package to prompt the user for input
const inquirer = require('inquirer');
// Import the built-in fs (file system) module to write the SVG file
const fs = require('fs');
// Import the shape classes
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: input => input.length <= 3 || 'Text must be three characters or less.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:'
    }
  ]);
}

// Function to generate the SVG based on user input
function generateSVG({ text, textColor, shape, shapeColor }) {
    let selectedShape;
  
    // Create an instance of the selected shape class
    switch (shape) {
      case 'Triangle':
        selectedShape = new Triangle();
        break;
      case 'Circle':
        selectedShape = new Circle();
        break;
      case 'Square':
        selectedShape = new Square();
        break;
    }
  
    // Set the color of the shape
    selectedShape.setColor(shapeColor);
  
    // Return the complete SVG string
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${selectedShape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
  }
  
  // Main function to run the application
  async function run() {
    try {
      // Prompt the user for input
      const answers = await promptUser();
  
      // Generate the SVG based on user input
      const svgContent = generateSVG(answers);
  
      // Write the SVG content to a file named 'logo.svg'
      fs.writeFileSync('logo.svg', svgContent);
  
      // Notify the user that the logo has been generated
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('Error generating SVG:', error);
    }
  }
  
  // Run the application
  run();
  