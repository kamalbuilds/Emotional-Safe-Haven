const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const replySchema = new Schema({
  author_id: String,
  desc: String,
  reply: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
});

module.exports = mongoose.model("Reply", replySchema);
