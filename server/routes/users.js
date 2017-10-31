const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Admin = require('../models/admin');

// Register
router.post('/register', (req, res, next) => {
  "use strict";
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    date: req.body.date,
    password: req.body.password.pwd,
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Admin authenticate
router.post('/admin', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.getByName(username, (err, admin) => {
    if (err) throw err;
    if (!admin) {
      return res.json({
        success: false,
      });
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(admin, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
        });
      } else {
        return res.json({
          success: false,
        });
      }
    });
  });
});

// Get profile
router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  res.json({
    user: req.user
  });
});

// Edit profile
router.post('/editProfile', (req, res, next) => {
  "use strict";
  const oldUsername = req.body.oldUsername;
  User.findOne({
    username: oldUsername
  }, function (err, user) {
    if (err) throw err;

    user.lastname = req.body.lastname,
      user.firstname = req.body.firstname,
      user.email = req.body.email,
      user.username = req.body.username,
      user.save();

    return res.json({
      success: true,
      msg: 'Successfull change'
    });
  });
});

// Edit password
router.post('/editPassword', (req, res, next) => {
  "use strict"
  const username = req.body.username;
  const currentPass = req.body.currentPass;
  const password = req.body.password.pwd;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    User.comparePassword(currentPass, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        User.editPass(password, user, (err, user) => {
          if (err) {
            res.json({
              success: false,
              msg: 'Failed to change pass'
            });
          } else {
            res.json({
              success: true,
              msg: 'User pass edit'
            });
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong current password'
        });
      }
    });
  });
})


// Get users
router.post('/getUsers', (req, res, next) => {
  "use strict"
  User.find(function (err, user) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(user);
    }
  })
})

// Delete user
router.post('/deleteUser', (req, res, next) => {
  "use strict"
  const username = req.body.username;
  User.findOne({
    username: username
  }, function (err, user) {

    if (err) throw err;

    // delete him
    User.deleteOne({
      username: username
    }, function (err, removed) {
      if (err) {
        res.status(500).send(err)
      } else {
        return res.json({
          success: true,
          msg: 'Successfull user deleted'
        });
      }
    });
  });
})

module.exports = router;