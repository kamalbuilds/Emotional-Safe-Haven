const User = require("./model/user/user.mongo");

const passport = require("passport");

const jwt = require("jsonwebtoken");

const LocalStrategy = require("passport-local");

passport.use(
  "user-local",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    User.authenticate()
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
