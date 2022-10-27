// TODO: Include the necessary packages for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Make a variety of questions for the user to answer.
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of your project? (Required)",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            console.log("Please enter a title for your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "User",
        message: "What is your GitHub username? (Required)",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "Description",
        message: "What is the project description?",
      },
      {
        type: "input",
        name: "Installation",
        message: "What are the project installation instructions?",
      },
      {
        type: "input",
        name: "Usage",
        message: "What are the intended uses of the project?",
      },
      {
        type: "input",
        name: "Contribution",
        message: "What are the guidelines for contributions to your project?",
      },
      {
        type: "input",
        name: "Test",
        message: "What are the test instruction for your project?",
      },
      {
        type: "list",
        name: "License",
        message: "What is the license of your project?",
        choices: [
          "No License",
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "MIT License",
          "Boost Software License 1.0",
        ],
      },
    ])
    .then((input) => {
      return input;
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Congratulations your README has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions() // Prompt user to get input data
    .then((input) => {
      return generateMarkdown(input);
    })
    .then((markdown) => {
      writeToFile("./dist/README.md", markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
