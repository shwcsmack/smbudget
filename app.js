require('./config/config');

const request     = require('superagent');
const {ObjectID}  = require('mongodb');
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const {PLAID_CONFIG, PLAID_URI} = require('./config/plaid');
const inquirer = require('./lib/inquirer');
const {mongoose} = require('./db/mongoose');
var {User} = require("./models/user");

const port = process.env.PORT;

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Plaid CLI App', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  var loggedIn = false;

  const credentials = await inquirer.askCredentials();

  const user = await User.findOne({user: credentials.username}).then((doc) => {
    if (doc && doc.pass === credentials.password) {
      return doc;
    } else {
      throw new Error("User or pass not valid");
    }
  }).catch((e) => {
    throw e;
  });

  console.log(`Hello ${user.user}`);
  const action = await inquirer.userActionsMenu();
};

try {
  run();
} catch (error) {
  console.log(error);
}

//users have items and items have accounts
//to add an account get a public token and then exchange for access token to access accounts