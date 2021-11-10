const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    check: Boolean
  },
  { collection: "addlocations" }
);

module.exports = mongoose.model('Status', StatusSchema);
