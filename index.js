//require the inquirer package 
const inquirer = require("inquirer");

//require the FS package 
const fs = require("fs");

//require the path package 
const path = require("path");

//require dotenv to hide environment variables
require('dotenv').config()

const api = require("./utils/api");

const generateMarkdown = require("./utils/generateMarkdown");

// console.log(process.env)



const questions = [
    //Use inquierer package 
    {
        //ask the user what their github user name is 
        type: "input",
        name: "githubName",
        message: "What is your git hub user name?",

    },


    //ask the user for their email 

    {
        //ask the user for a project name 
        type: "input",
        name: "projectTitle",
        message: "What is your git hub Project Name?",

    },


    {
        //ask the user for a description of the project 
        type: "input",
        name: "description",
        message: "Please provide a short description of your project.",

    },


    {
        type: "list",
        name: "license",
        message: "What license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL", "BSD3", "NONE"]
    },




    {
        //ask the user what commands should be run to install dependencies 
        type: "input",
        name: "install",
        message: "What command should we run to install dependencies?",
        default: "npm i"

    },

    {
        //ask what command to run test for the app 
        type: "input",
        name: "runTest",
        message: "What command should be ran to run tests?",
        default: "npm test"

    },

    {
        //ask does the user what they need to know about using the repo 
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",

    },

    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?",

    }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        api.getUser(answers.githubName).then(function (data) {
            let allData = { ...answers, ...data.data };
            writeToFile("README.md", generateMarkdown(allData));
       })
    })
}

init();
