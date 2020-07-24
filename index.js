//require statements for necessary application components
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description.",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the application installation instructions.",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Please enter the installation instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the application usage instructions.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage instructions.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter the contribution instructions.",
        validate: contribInput => {
            if (contribInput) {
                return true;
            } else {
                console.log("Please enter the project contribution instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter your test instructions.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter your test instructions!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email adderss!");
                return false;
            }
        }
    }
];

const mockData = {
    title: 'readme-generator',
    description: 'This application will prompt you for some information regarding your project, then generate a high quiality README file to include in your GitHub repo.',
    installation: "The application uses node.js, so you will need to have that already installed on your computer. Then simply clone the repo and from the terminal, run 'node index.js'.",
    usage: 'The application will ask you several questions regarding your project. As of now, each question is required. Answer all of the questions, and the application will then create a README file for you to include in your project. The README will include the following sections: Project Title, Project Description, Installation Instructions, Usage Instructions, License Information, Contribution Instructions, Test Info, and contact information for any questions.',
    contribute: 'If you are interested in contributing to this project, you can contact me directly either through GitHub or by email at the address listed in the Questions section.',
    tests: 'No real  test instructions for this project.',
    username: 'jdlawton',
    email: 'joe.lawton@outlook.com'
  };

// function to prompt user for input
const promptUser = userQuest => {
    return inquirer.prompt(userQuest);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File Written...");
    });
}

// function to initialize program
function init() {
    promptUser(questions)
        .then(userInput => {
            //console.log(userInput);
            return generateMarkdown(userInput);
        })
        .then(pageData => {
            writeToFile("./TEST.md", pageData);
            console.log("All done!");
        })
}

function mockInit() {
    const pageData = generateMarkdown(mockData)
    writeToFile("./README.md", pageData);
    
}

// function call to initialize program
//init();
mockInit();
