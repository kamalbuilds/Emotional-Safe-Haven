const User = require("./user.mongo");
const Dilemma = require("./dilemma.mongo");
const { randomBytes } = require("crypto");

const postImages = async (user_id, files) => {
  files.map(async (img) => {
    await User.updateOne(
      { user_id: user_id },
      {
        $addToSet: {
          peaceImages: `src/uploads/images/${img.filename}`,
        },
      },
      {
        upsert: true,
      }
    );
  });
};

const postDilemma = async (user_id, postData) => {
  const dillema_id = `d-${randomBytes(8).toString("hex")}`;
  Dilemma.findOneAndUpdate(
    { author_id: user_id },
    {
      dillema_id: dillema_id,
      author_id: user_id,
      desc: postData.desc,
    },
    {
      new: true,
      upsert: true,
    },
    async (err, doc) => {
      await User.updateOne(
        { user_id: user_id },
        {
          $addToSet: {
            dilemma: doc._id,
          },
        }
      );
      return doc;
    }
  );

};

module.exports = {
  postImages,
  postDilemma,
};
