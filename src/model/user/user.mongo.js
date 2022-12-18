const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
    },
    peaceImages: [String],
    dilemma: [{ type: Schema.Types.ObjectId, ref: "Dilemma" }],
  },
  {
    strict: false,
  }
);

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

// UserSchema.methods.findOrCreate = function ()

module.exports = mongoose.model("User", UserSchema);
