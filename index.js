const inquirer = require('inquirer');
const fs = require('fs');


// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title/name of the website/app/project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please describe the project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter the link for the website:',
            name: 'link',
        },
        {
            type: 'input',
            message: 'What are the steps to install the app/project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the usage instructions?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please give any license information:',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can users contribute to your project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'How can users test the application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your name, or name of the creator of the website?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },

       
    ])

    //Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

.then((response) => {
    const mdOutput = `
# ${response.title}
## Description:
${response.description}
Link to website: [${response.link}](${response.link})
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
${response.installation}
## Usage:
${response.usage}
## License:
${response.license}
## Contributing:
${response.contributing}
## Tests:
${response.tests}
## Questions:
You may contact ${response.name} at ${response.email}
And be sure to check out my [GitHub page](github.com/${response.github})
`;
        console.log('response:', response);

fs.writeFile('ReadME.md', mdOutput, (err) =>
    err
    ? console.error(err)
    : console.log('ReadME created successfully!')
);

    });

// fs.writeFile('ReadMe.md', process.argv[2], (err) =>
//     err ? console.error(err) : console.log('ReadME Created!')
// );