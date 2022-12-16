const { ErrorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; //Authorization:'BearerToken'
    if (!token) {
      throw new ErrorHandler(401, "Authentication failed");
    }

    const decodedToken = jwt.verify(token, process.env.JWTSecretKey);

    req.userData = { user_id: decodedToken.user_id };
    next();
  } catch (err) {
    const error = new ErrorHandler(401, "Authentication failed");
    return next(error);
  }
};
