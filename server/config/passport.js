const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const Admin = require("../models/admin");
const config = require("../config/database");

module.exports = function(passport) {
  "use strict";
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
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
          console.log("err in pass");
          return done(err, false);
        }

        if (admin) {
          console.log("done1");
          return done(null, admin);
        } else {
          console.log("done2");
          return done(null, false);
        }
      });
    })
  );
};
