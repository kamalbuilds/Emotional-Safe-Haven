const router = require("express").Router();
const fileUpload = require("../middleware/file-upload");
const catchAsync = require("../utils/catchAsync");
const checkAuth = require("../middleware/check-auth");
const {
  httpPostImages,
  httpPostDilemma,
} = require("../controllers/user.controller");

router.use(checkAuth);

router.post(
  "/peacepocket/images",
  fileUpload.array("peace-image", 25),
  catchAsync(httpPostImages)
);

router.post("/dilemma/post", catchAsync(httpPostDilemma));

module.exports = router;
