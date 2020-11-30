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


// fs.writeFile('ReadMe.md', process.argv[2], (err) =>
//     err ? console.error(err) : console.log('ReadME Created!')
// );

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title/name of the website/app/project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What are the steps to install the app/project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter the link for the website:',
            name: 'link',
        },
        {
            type: 'input',
            message: 'What are the usage instructions?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'About the project:',
            name: 'about',
        },
        {
            type: 'input',
            message: 'Summary of project:',
            name: 'summary',
        },
        {
            type: 'input',
            message: 'Created by:',
            name: 'creator',
        },
        {
            type: 'input',
            message: 'Are there collaborators on this project? Please list them including GitHub usernames:',
            name: 'collaborators',
        },
        {
            type: 'input',
            message: 'Please give any license information:',
            name: 'license',
        },
    ])

    .then((response) => {
        const mdOutput = `
    #${response.title}
    ##Installation instructions:${response.installation}
    ##Link to Website:<br>${response.link}
    ##Usage Instructions:<br>${response.usage}
    ##About the Project:<br>${response.about}
    ##Summary of Project:<br>${response.summary}
    ##Created by:<br>${response.creator}
    ##Collaborators:<br>${response.collaborators}
    ##Licensing information:<br>${response.license}
    
    `;
        console.log('response:', response);

        fs.writeFile('ReadME.md', mdOutput, (err) =>
            err
                ? console.error(err)
                : console.log('ReadME created successfully!')
        );

    });

