const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    name: String,
    check: Boolean
  },
  { collection: "addlocations" }
);

module.exports = mongoose.model('Status', StatusSchema);
