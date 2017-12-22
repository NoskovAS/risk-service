const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const User = require("../models/user");
const Admin = require("../models/admin");
const config = require("../config/database");
const auth = require('./auth');

module.exports = googleUser = {};

module.exports = function(passport) {
    "use strict";
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.getUserById(jwt_payload._doc._id, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
            Admin.getAdminById(jwt_payload._doc._id, (err, admin) => {
                if (err) {
                    return done(err, false);
                }
                if (admin) {
                    return done(null, admin);
                } else {
                    return done(null, false);
                }
            });
        })
    );


    /* Facebook authenticate */
    const fbOptions = {
        clientID: auth.facebookAuth.clientID,
        clientSecret: auth.facebookAuth.clientSecret,
        callbackURL: auth.facebookAuth.callbackURL,
        profileFields: ['id', 'emails', 'name', 'profileUrl'],
        return_scopes: true
    };

    let fbCallback = function(accessToken, refreshToken, profile, done) {
        process.nextTick(() => {
            User.findOne({ id: 'facebook' + profile.id }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, user);
                } else {
                    var email;
                    if ((profile.emails === '') || (profile.emails === undefined)) {
                        email = 'Email not available';
                    } else {
                        email = profile.emails[0].value;
                    }
                    let newDate = new Date();
                    let newUser = new User({
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        id: 'facebook' + profile.id,
                        email: email,
                        username: 'facebook' + profile.id,
                        date: newDate
                    });
                    newUser.save(
                        (err) => {
                            if (err) {
                                throw err;
                            } else {
                                return done(null, newUser);
                            }
                        });
                }
            });
        });

        done(null, profile);
    };

    passport.use(new FacebookStrategy(fbOptions, fbCallback));


    //////////////////////////////////////////////////////////


    /* Google authenticate */
    const googleOptions = {
        clientID: auth.googleAuth.clientID,
        clientSecret: auth.googleAuth.clientSecret,
        callbackURL: auth.googleAuth.callbackURL,
    };

    let googleCallback = function(accessToken, refreshToken, profile, done) {
        process.nextTick(() => {
            User.findOne({ id: 'google' + profile.id }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, user);
                } else {
                    var email;
                    if ((profile.emails === '') || (profile.emails === undefined)) {
                        email = 'Email not available';
                    } else {
                        email = profile.emails[0].value;
                    }
                    let newDate = new Date();
                    let newUser = new User({
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        id: 'google' + profile.id,
                        email: email,
                        username: 'google' + profile.id,
                        date: newDate
                    });
                    newUser.save(
                        (err) => {
                            if (err) {
                                throw err;
                            } else {
                                return done(null, newUser);
                            }
                        });
                }
            });
        });

        done(null, profile);
    };

    passport.use(new GoogleStrategy(googleOptions, googleCallback));


    //////////////////////////////////////////////////////////

    /* Github authenticate */
    const githubOptions = {
        clientID: auth.githubAuth.clientID,
        clientSecret: auth.githubAuth.clientSecret,
        callbackURL: auth.githubAuth.callbackURL,
    };

    let githubCallback = function(accessToken, refreshToken, profile, done) {
        process.nextTick(() => {
            User.findOne({ id: 'github' + profile.id }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, user);
                } else {
                    let email;
                    let date = new Date();

                    if ((profile.emails === '') || (profile.emails === undefined)) {
                        email = 'Email not available';
                    } else {
                        email = profile.emails[0].value;
                    }

                    let newUser = new User({
                        firstname: profile.displayName.split(' ')[0],
                        lastname: profile.displayName.split(' ')[1],
                        id: 'github' + profile.id,
                        email: email,
                        username: 'github' + profile.id,
                        date: date
                    });
                    newUser.save(
                        (err) => {
                            if (err) {
                                throw err;
                            } else {
                                return done(null, newUser);
                            }
                        });
                }
            });
        });

        done(null, profile);
    };

    passport.use(new GithubStrategy(githubOptions, githubCallback));

};