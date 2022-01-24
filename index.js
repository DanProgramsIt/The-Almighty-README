// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMark = require('.utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // for github
    {
        type: 'input',
        name: 'github',
        message: 'Provide your github username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please provide your github username!');
                return false;
            }
        }
    },
    // for email
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    },
    // for title
    {
        type: 'input',
        name: 'project-title',
        message: 'Provide your project title.',
        validate: prejectInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    // for description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    // for table of content
    {
        type: 'confirm',
        name: 'confirmContent',
        message: 'Would you like to use a table of content?',
        default: false
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('../dist/README.md', data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("New file created!")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let data = generateMarkdown(answers);
        writeToFile(data)
    });
}

// Function call to initialize app
init();
