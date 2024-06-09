// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your readMe?",
    name: "readMe name",
  },

  {
    type: "input",
    message: "What is your github username?",
    name: "userName",
  },

  {
    type: "input",
    message: "what is your email?",
    name: "userEmail",
  },

  {
    type: "input",
    message: "Give us a short description of the project",
    name: "description",
  },

  {
    type: "list",
    message: "What type of License do you want to use?",
    name: "License",
    choices: [
      "Apache license 2.0",
      "Eclipse Public License 2.0",
      "MIT",
      "Microsoft Public License",
      "zLib License",
      "none",
    ],
  },

  {
    type: "input",
    message: "Test command?",
    name: "command",
  },

  {
    type: "input",
    message: "What are you contributing to the repo?",
    name: "contributing",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success')
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    const markdown = generateMarkdown(response)
    writeToFile('testReadMe.md', markdown)
  })
}

// Function call to initialize app
init();
