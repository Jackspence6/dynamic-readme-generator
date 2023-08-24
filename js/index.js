/******************************************/
/* External dependencies */
/******************************************/
// Importing "Inquirer" to application
import { error, log } from "console";
import inquirer from "inquirer";
// Importing "fs" to application
import fs from "fs";
/******************************************/
/* Environment Variables and Constants */
/******************************************/

/******************************************/
/* Function Declarations */
/******************************************/

/******************************************/
/* Class Declarations */
/******************************************/

/******************************************/
/* Event Listeners */
/******************************************/

/******************************************/
/* Middleware Definitions */
/******************************************/

/******************************************/
/* Route Definitions */
/******************************************/

/******************************************/
/* Database Connections */
/******************************************/

/******************************************/
/* Server Initialization */
/******************************************/

/******************************************/
/* Main Logic */
/******************************************/
// Command Line Questions to users
inquirer
  .prompt([
    {
      type: "input",
      name: "projectProfileUrl",
      message: "Please provide your GitHub Url:",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "Please provide you project title:",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "projectFeatures",
      message:
        "Please provide you a list of your project's Features:(Separate each feature with a semi-colon)",
    },
    {
      type: "input",
      name: "projectInstallation",
      message:
        "Please provide the steps required to install your application: (Separate each step with a semi-colon)",
    },
    {
      type: "input",
      name: "projectUsage",
      message:
        "Please provide the usage steps for your application: (Separate each step with a semi-colon)",
    },
    {
      type: "input",
      name: "projectCredits",
      message:
        "Please provide a list of people who contributed to your project, if any: (Separate each contributor with a semi-colon)",
    },
    {
      type: "list",
      name: "projectLicense",
      message: "Please select a license for your project:",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "projectEmail",
      message: "Please your Email Address:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Adding user data to README
    const userReadmeData = `
# ${answers.projectTitle}
${answers.projectDescription}

## Table of Contents

- [Installation](#Installation)
- [Usage](#usage)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#License)


## Installation

## Usage

## Features

## Contributing

## Credits

## License

`;
  });
