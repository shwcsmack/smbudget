require('./config/config');

const request     = require('superagent');
const {ObjectID}  = require('mongodb');

const {PLAID_CONFIG, PLAID_URI} = require('./config/plaid');
const {mongoose} = require('./db/mongoose');
var {User} = require("./models/user");

const port = process.env.PORT;



//users have items and items have accounts
//to add an account get a public token and then exchange for access token to access accounts