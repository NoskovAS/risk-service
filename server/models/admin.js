const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

// Admin Schema
const AdminSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Admin = (module.exports = mongoose.model("Admin", AdminSchema));

/* module.exports.getAdminById = function (id, callback) {
  User.findById(id, callback);
} */

module.exports.getByName = function(username, callback) {
  const query = {
    username: username
  };
  Admin.findOne(query, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
