require('./config/config');

const request     = require('superagent');
const {ObjectID}  = require('mongodb');
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

const {PLAID_CONFIG, PLAID_URI} = require('./config/plaid');
const inquirer = require('./lib/inquirer');
const {mongoose} = require('./db/mongoose');

const port = process.env.PORT;

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Plaid CLI App', { horizontalLayout: 'full' })
  )
);

var userSchema = mongoose.Schema({
  email: String,
  user: String,
  pass: String
});

var User = mongoose.model('User', userSchema);

var testUser = new User({
  email: "test@test.com",
  user: "test",
  pass: "pass"
});

// testUser.save((err, doc) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(doc);
//   }
// });

const run = async () => {
  var loggedIn = false;

  const credentials = await inquirer.askCredentials();

  User.findOne({user: credentials.username}).then((doc) => {
    if (doc && doc.pass === credentials.password) {
      console.log(doc);
    } else {
      console.log("User or pass not valid");
    }
  }).catch((e) => {
    console.log(e);
  })

  console.log(credentials);
};

run();
