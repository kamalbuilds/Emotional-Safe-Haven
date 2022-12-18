const User = require("../model/user/user.mongo");
const { ErrorHandler } = require("../utils/error");
const { randomBytes } = require("crypto");
const jwt = require("jsonwebtoken");

const httpAuthLocalSignup = async (req, res, next) => {
  const { username, email, password, first_name, last_name } = req.body;

  const user = new User({
    user_id: `u-${randomBytes(8).toString("hex")}`,
    username,
    email,
    first_name,
    last_name,
  });

  const registeredUser = await User.register(user, password);

  req.login(registeredUser, (err) => {
    if (err) {
      const Error = new ErrorHandler(500, err.message);
      next(Error);
    }
    console.log(`safe haven  ${registeredUser.user_name}`);
  });

  const user_id = registeredUser.user_id;

  const token = jwt.sign(
    {
      user_id,
      email,
      username,
    },
    process.env.JWTSecretKey,
    {
      expiresIn: "1d",
    }
  );

  if (!token) {
    throw new ErrorHandler(500, "Jwt token could not be genreated");
  }

  res.status(200).json({
    status: "ok",
    message: "successfully registerd",
    user_data: {
      user_id,
      username,
      email,
      token,
      first_name,
      last_name,
    },
  });
};
const httpAuthLogin = (req, res, next) => {
  try {
    const redirectUrl = req.session.returnTo || "/login";

    delete req.session.returnTo;

    const { user_id, email, username } = req.user;

    let token;

    token = jwt.sign(
      {
        user_id,
        email,
        username,
      },
      process.env.JWTSecretKey,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      status: "ok",
      user_details: {
        user_id,
        username,
        email,
        token,
      },
    });
  } catch (err) {
    const Error = new ErrorHandler(500, err);
    next(Error);
  }
};

module.exports = {
  httpAuthLocalSignup,
  httpAuthLogin,
};
