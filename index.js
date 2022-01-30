// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMark = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  // for github
  {
    type: "input",
    name: "username",
    message: "Provide your github username.",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your github username!");
        return false;
      }
    },
  },
  // for email
  {
    type: "input",
    name: "email",
    message: "Provide your email address.",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    },
  },
  // for title
  {
    type: "input",
    name: "title",
    message: "Provide your project title.",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  // for description
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  // for table of content
  {
    type: "confirm",
    name: "confirmContent",
    message: "Would you like to use a table of content?",
    default: false,
  },

  // for license
  {
    type: "list",
    name: "license",
    message: "What license should your project have?",
    choices: [
      "MIT",
      "Unlicense",
      "Apache 2.0",
      "GNU",
      "Mozilla Public License 2.0",
    ],
  },

  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repository?",
  },
  {
    type: "input", 
    name: "contribute",
    message: "What does the user need to know about contributing to the repository?",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return writeFileAsync(fileName, data);
};

// TODO: Create a function to initialize app
const init = async () => {
  try {
    console.log("Please answer the following questions to make your README");
    const answers = await promptUser();

    const fileContent = generateMark(answers);

    await writeToFile("generate/README.md", fileContent);

    console.log("README.md created in generate folder.");
  } catch (err) {
    console.error("Error README.md was not created!");
    console.log("err");
  }
};

// Function call to initialize app
init();
