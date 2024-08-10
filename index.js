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
