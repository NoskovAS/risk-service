const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const User = require("../models/user");
const Admin = require("../models/admin");
const host = require("../config/host");

var facebookUser = {};
var googleUser = {};
var githubUser = {};

// Register
router.post("/register", (req, res, next) => {
    "use strict";
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        date: req.body.date,
        password: req.body.password.pwd
    });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: "Failed to register user"
            });
        } else {
            res.json({
                success: true,
                msg: "User registered"
            });
        }
    });
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
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
                    token: "JWT " + token,
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
                    msg: "Wrong password"
                });
            }
        });
    });
});

// Get profile
router.get("/profile", passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        res.json({
            user: req.user
        });
    }
);

// Edit profile
router.post("/editProfile", (req, res, next) => {
    "use strict";
    const oldUsername = req.body.oldUsername;

    User.findOne({ username: req.body.username }, (err, user, done) => {
        if (err) {
            return done(err);
        }
        if (user) {
            return res.json({
                success: false,
                msg: "Unsuccessfull change"
            });
        } else {
            User.findOne({ username: oldUsername },
                function(err, user) {
                    if (err) throw err;

                    (user.lastname = req.body.lastname),
                    (user.firstname = req.body.firstname),
                    (user.email = req.body.email),
                    (user.username = req.body.username),
                    user.save();

                    return res.json({
                        success: true,
                        msg: "Successfull change"
                    });
                }
            );
        }
    });
});

// Set password
router.post("/addPassword", (req, res, next) => {
    "use strict";
    const username = req.body.username;
    const password = req.body.password.pwd;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
            });
        }
        User.editPass(password, user, (err, user) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Failed to add pass"
                });
            } else {
                res.json({
                    success: true,
                    msg: "User pass added"
                });
            }
        });
    });
});

// Edit password
router.post("/editPassword", (req, res, next) => {
    "use strict";
    const username = req.body.username;
    const currentPass = req.body.currentPass;
    const password = req.body.password.pwd;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
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
                            msg: "Failed to change pass"
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: "User pass edit"
                        });
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: "Wrong current password"
                });
            }
        });
    });
});

// Delete user
router.post("/deleteUser", (req, res, next) => {
    "use strict";
    const username = req.body.username;
    User.findOne({
            username: username
        },
        function(err, user) {
            if (err) throw err;

            // delete him
            User.deleteOne({
                    username: username
                },
                function(err, removed) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        return res.json({
                            success: true,
                            msg: "Successfull user deleted"
                        });
                    }
                }
            );
        }
    );
});

/* Facebook authenticate */
router.get('/getFacebookData', (req, res, next) => {
    res.json({
        facebookUser: facebookUser,
        success: true,
        msg: "Success to facebook auth",
    });
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: host.clientHost + 'users/login' }),
    function(req, res, done) {
        User.findOne({ id: 'facebook' + req.user.id }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                facebookUser.firstname = user.firstname;
                facebookUser.lastname = user.lastname;
                facebookUser.username = user.username;
                facebookUser.email = user.email;
                return done(null, user);
            } else {
                facebookUser.firstname = req.user.name.givenName;
                facebookUser.lastname = req.user.name.familyName;
                facebookUser.username = 'facebook' + req.user.id;
                if (req.user.emails[0] === undefined) {
                    facebookUser.email = 'Email not available';
                } else {
                    facebookUser.email = req.user.emails[0].value;
                }
            }
        });
        res.redirect(host.clientHost + 'users/auth/facebook');
    });


/* Google authenticate */
router.get('/getGoogleData', (req, res, next) => {
    res.json({
        googleUser: googleUser,
        success: true,
        msg: "Success to google auth",
    });
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })); //email yet

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: host.clientHost + 'users/login' }),
    function(req, res, done) {
        User.findOne({ id: 'google' + req.user.id }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                googleUser.firstname = user.firstname;
                googleUser.lastname = user.lastname;
                googleUser.username = user.username;
                googleUser.email = user.email;
                return done(null, user);
            } else {
                googleUser.firstname = req.user.name.givenName;
                googleUser.lastname = req.user.name.familyName;
                googleUser.username = 'google' + req.user.id;
                if (req.user.emails[0] === undefined) {
                    googleUser.email = 'Email not available';
                } else {
                    googleUser.email = req.user.emails[0].value;
                }
            }
        });
        res.redirect(host.clientHost + 'users/auth/google');
    });


/* Github authenticate */
router.get('/getGithubData', (req, res, next) => {
    res.json({
        githubUser: githubUser,
        success: true,
        msg: "Success to github auth",
    });
});

router.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: host.clientHost + 'users/login' }),
    function(req, res, done) {
        User.findOne({ id: 'github' + req.user.id }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                githubUser.firstname = user.firstname;
                githubUser.lastname = user.lastname;
                githubUser.username = user.username;
                githubUser.email = user.email;
                return done(null, user);
            } else {
                githubUser.firstname = req.user.displayName.split(' ')[0];
                githubUser.lastname = req.user.displayName.split(' ')[1];
                githubUser.username = 'github' + req.user.id;
                if (req.user.emails[0] === undefined) {
                    githubUser.email = 'Email not available';
                } else {
                    githubUser.email = req.user.emails[0].value;
                }
            }
        });
        res.redirect(host.clientHost + 'users/auth/github');
    });

module.exports = router;