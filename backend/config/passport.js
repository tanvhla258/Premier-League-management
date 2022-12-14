const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const userM = require("../models/users.m");
module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function (user, done) {
    done(null, user.f_Username);
  });

  passport.deserializeUser(async function (username, done) {
    try {
      const user = await userM.byName2(username);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await userM.byName2(username);
          if (!user) {
            return done(null, false);
          }

          const compare = await bcrypt.compare(password, user.f_Password);
          if (!compare) {
            return done(null, false);
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};