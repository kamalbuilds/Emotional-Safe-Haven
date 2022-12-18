const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const dilemmaSchema = new Schema({
  dillema_id:String,
  desc: String,
  author_id: String,
  replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
});

module.exports = mongoose.model("Dilemma", dilemmaSchema);
