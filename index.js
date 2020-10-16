// --------Psuedo Code------------

// ```md
// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository

// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

// ## Table of Contents (Optional)

// If your README is very long, add a table of contents to make it easy for users to find what they need.

// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)

// -------------------------------

const inquirer = require("inquirer")
const fs = require("fs")


// array of questions for user
const questions = [ {
    type: "input",
    message: "What is your name?",
    name: "name",
}
    type: "input",
    message: "What is your GitHub "
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}   

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(({
        name
    }) => {
        const markdown = `
## My name is ${name}
`
        writeToFile("tempReadMe.md", markdown)
    })
}



// function call to initialize program
init();
