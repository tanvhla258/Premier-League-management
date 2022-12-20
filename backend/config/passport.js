const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userM = require("../models/user.m");
const bcrypt = require("bcrypt");
const session = require("express-session");

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await userM.getUserByName(username);
        if (!user) {
          return done(null, false);
        }
        const compare = await bcrypt.compare(password, user.Password);
        if (!compare) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        return done(err);
      }
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.Ten_User);
  });
};
