// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Does the GitHub repository have a license? Leave blank if there is no license',
    name: 'license'
},
{
    type: 'input',
    message: 'What is the title of the GitHub repository or project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Complete the description of the GitHub repository or project?',
    name: 'description'
},
{
    type: 'input',
    message: 'What commands are required to install the project?',
    name: 'installation'
},
{
    type: 'input',
    message: 'Who are the project contributors?',
    name: 'contributing'
},
{
    type: 'input',
    message: 'What commands are required to run tests with the project?',
    name: 'test'
},
{
    type: 'input',
    message: 'What contact email do you want to provide for the ReadMe to address potential issues?',
    name: 'email'
},
{
    type: 'input',
    message: 'What are the GitHub accounts of the contributors?',
    name: 'github'
}
]

//inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        err ? console.log(err) : console.log('Read me generated!')
    );
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('ReadMe.md',generateMd(data))
        });
}

// Function call to initialize app
init();
