const session = require("express-session");

module.exports = (app) => {
  app.set("trust proxy", 1); // trust first proxy
  app.use(
    session({
      key: "userId",
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        expires: 60 * 60 * 24,
      },
    })
  );
};
