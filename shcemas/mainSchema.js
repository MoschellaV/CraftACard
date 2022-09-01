const mongoose = require("mongoose");

const mainSchema = mongoose.Schema({
  timeSent: String,
  name: String,
  occasion: String,
  recipientEmail: String,
  message: String,
  imageURL: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("main", mainSchema);
