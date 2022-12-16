const { ErrorHandler } = require("./error");

module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};
