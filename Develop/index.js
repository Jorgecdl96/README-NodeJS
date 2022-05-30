// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = generateMarkdown;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted your project title, please provide it');
                return false;
            }
        }
      },
      {
          type: 'input',
          message: 'Please submit the description of your project:',
          name: 'description',
          validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted your description, please provide it');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted the steps to install your project, please provide it');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not answered, please provide how to use your project');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'Provide any contribution if needed:',
        name: 'contribution',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted an answer, if no one contributed type "No contribution"');
                return false;
            }
        }
      },
      {
        type: 'list',
        message: 'Please select which license did you use for this project:',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense'],
        name: 'license',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted your license, please provide it');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'Provide tests for your project if needed. ',
        name: 'tests',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted any test, if there is no test type "No tests"');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted your GitHub, please provide it');
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: (answer) => {
            if(answer){
                return true;
            }else{
                console.log('\nYou have not submitted an email, please provide it');
                return false;
            }
        }
      }

];

inquirer
  .prompt(questions)
  .then((data) => {
      
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    writeToFile(filename, data);

  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('READMEGENERATOR.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();