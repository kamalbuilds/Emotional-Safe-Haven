const router = require("express").Router();

const { httpGetAllDilemma } = require("../controllers/dilemma.controller.js");
const catchAsync = require("../utils/catchAsync.js");

router.get("/fetch/all", catchAsync(httpGetAllDilemma));

module.exports = router;
