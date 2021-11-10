const mongoose = require("mongoose");

const AddlocationSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    sector: { type: String, default: null },
    province: { type: String, default: null },
    district: { type: String, default: null },
    type: { type: String, default: null },
    imageurl: { type: Array, default: null },
    opentime: { type: String, default: null },
    closetime: { type: String, default: null },
    toilet: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    detail: { type: String, default: null },
    contact: { type: String, default: null },
    security: { type: String, default: null },
    location: { type: String, default: null },
    check: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Addlocation", AddlocationSchema);
