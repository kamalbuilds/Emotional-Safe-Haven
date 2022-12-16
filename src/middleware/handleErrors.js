module.exports = (err, req, res, next) => {
  const { code, message } = err;
  console.log(code, message);

  return res.status(code).json({
    status: "error",
    message: message,
  });
};
