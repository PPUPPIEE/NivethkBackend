const mongoose = require("mongoose");

const ProvinceSchema = new mongoose.Schema(
  {
    id: { type: Number },
    sector: { type: String },
    name: { type: String },
  },
  { collection: "province" }
);

module.exports = mongoose.model("Province", ProvinceSchema);
