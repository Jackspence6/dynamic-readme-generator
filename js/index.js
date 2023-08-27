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
// Function to write the README file taking in answers as the parameter
function writeFile(answers) {
  // Formatting Project Installation and splitting them at the semi-colon & adding a number before each installation step
  let formattedInstallation = "";
  answers.projectInstallation.split(";").forEach((installation, index) => {
    formattedInstallation += `${index + 1}. ${installation}\n`;
  });
  // Formatting Project Usage and splitting them at the semi-colon
  // Initializing usage steps with opening triple backticks and a newline
  let formattedUsage = "```\n";
  answers.projectUsage.split(";").forEach((usage) => {
    formattedUsage += `${usage}\n`;
  });
  // Appending usage steps with closing triple backticks
  formattedUsage += "```";
  // Formatting Project features and splitting them at the semi-colon
  let formattedFeatures = "";
  answers.projectFeatures.split(";").forEach((features) => {
    formattedFeatures += `- ${features}\n`;
  });
  // Formatting Project Credits and splitting them at the semi-colon
  let formattedCredits = "";
  answers.projectCredits.split(";").forEach((Credits) => {
    formattedCredits += `- ${Credits}\n`;
  });
  return {
    formattedInstallation,
    formattedUsage,
    formattedFeatures,
    formattedCredits,
  };
}
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
      message: "Please provide your GitHub Profile Url:",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "Please provide your project title:",
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
        "Please provide a list of your project's Features:(Separate each feature with a semi-colon(;))",
    },
    {
      type: "input",
      name: "projectInstallation",
      message:
        "Please provide the steps required to install your application: (Separate each step with a semi-colon(;))",
    },
    {
      type: "input",
      name: "projectUsage",
      message:
        "Please provide the usage steps for your application: (Separate each step with a semi-colon(;))",
    },
    {
      type: "input",
      name: "projectCredits",
      message:
        "Please provide a list of people who contributed to your project, if any: (Separate each contributor with a semi-colon(;))",
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
      message: "Please provide your Email Address:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Debug log
    console.log("Output of writeFile:", writeFile(answers));
    // Assigning & destructuring new formatted answers to constants
    const {
      formattedInstallation,
      formattedUsage,
      formattedFeatures,
      formattedCredits,
    } = writeFile(answers);

    // Assigning Project License choice to licenseStr
    const licenseStr = answers.projectLicense;
    // Extracting the first word from the String
    const licenseWord = licenseStr.split(" ")[0];
    // Logging the first word from the string to the console
    console.log(licenseWord);
    // License badge URL to generate badge
    const licenseBadgeURL = `https://img.shields.io/badge/License-${licenseWord}-blue.svg`;

    // Adding user data to README
    const userReadmeData = `
![License Badge](${licenseBadgeURL})

# ${answers.projectTitle}
  ${answers.projectDescription}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Features](#Features)
  - [How to Contribute](#Contributing)
  - [Credits](#Credits)
  - [License](#License)

## Installation
${formattedInstallation}

## Usage
${formattedUsage}

## Features
${formattedFeatures}

## Contributing
If you would like to contribute to this project. Please email me at ${answers.projectEmail}. If you would like to contribute to future projects, please follow me at ${answers.projectProfileUrl}.

## Credits
${formattedCredits}

## License
This project is licensed under the ${licenseStr}. See the [LICENSE.md](LICENSE.md) file for details.`;

    // Writing README from user data
    fs.writeFile("README.md", userReadmeData, (err) => {
      if (err) {
        console.error("An error occurred while writing the file:", err);
        return;
      }
      console.log("README.md has been created successfully!");
    });
  });
