const Dilemma = require("../model/user/dilemma.mongo");

const httpGetAllDilemma = async (req, res) => {
  const dilemmaResults = await Dilemma.find({});

  res.status(200).json({
    status: "ok",
    results: dilemmaResults,
  });
};

module.exports = {
  httpGetAllDilemma,
};
