const router = require("express").Router();
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");

const {
  httpAuthLocalSignup,
  httpAuthLogin,
} = require("../controllers/auth.controller");

router.post("/signup", catchAsync(httpAuthLocalSignup));
router.post(
  "/login",
  (req, res, next) => {
    req.userData = { role: "user" };
    next();
  },
  passport.authenticate("user-local", {
    failureFlash: true,
  }),
  httpAuthLogin
);

module.exports = router;
