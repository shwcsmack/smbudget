const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  user: String,
  pass: String
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User
};