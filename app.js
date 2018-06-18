const request     = require('superagent');
const {ObjectID}  = require('mongodb');
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const {PLAID_CONFIG, PLAID_URI} = require('./config/plaid');
const inquirer = require('./lib/inquirer');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Plaid CLI App', { horizontalLayout: 'full' })
  )
);

var User = {
  _id: new ObjectID(),
  email: 'shayne@code3dev.com',
  user: 'test',
  pass: 'pass'
};


const run = async (params) => {
  const credentials = await inquirer.askCredentials();
  console.log(credentials);
};

run();
