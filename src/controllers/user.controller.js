const Dilemma = require("../model/user/dilemma.mongo");

const { postImages, postDilemma } = require("../model/user/user.model.js");

const httpPostImages = async (req, res) => {
  console.log(req.userData);

  const user_id = req.userData.user_id;
  await postImages(user_id, req.files);

  res.status(200).json({
    status: "ok",
    user_id,
    msg: "images succesfully stored",
  });
};

const httpPostDilemma = async (req, res) => {
  const user_id = req.userData.user_id;
  const dillema_id = await postDilemma(user_id, req.body);

  await Dilemma.find({ dillema_id: dillema_id });

  res.status(200).json({
    status: "ok",
    user_id,

    msg: "dillemma succesfully post",
  });
};

module.exports = {
  httpPostImages,
  httpPostDilemma,
};
