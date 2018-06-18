const inquirer   = require('inquirer');

var askCredentials = () => {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your username:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username.';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
};

var userActionsMenu = () => {
  const questions = [
    {
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: ['View Accounts', 'Add Account']
    }
  ];
  return inquirer.prompt(questions);
};


module.exports = {
  askCredentials,
  userActionsMenu
};