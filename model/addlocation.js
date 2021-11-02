const mongoose = require("mongoose");

const AddlocationSchema = new mongoose.Schema({
    name: { type: String },
    sector: { type: String },
    province: { type: String },
    district: { type: String },
    type: { type: String },
    imageurl: { type: String },
    opentime: { type: String },
    closetime: { type: String },
    toilet: { type: Boolean },
    parking: { type: Boolean },
    detail: { type: String },
    contact: { type: String },
    security: { type: String },
    location: { type: String }
}, {
    timestamps: true
}
);

module.exports = mongoose.model('Addlocation', AddlocationSchema);