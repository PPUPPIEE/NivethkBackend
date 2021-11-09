const mongoose = require('mongoose');
const Status = require("../model/updateStatus")
const router = require("express").Router();

router.patch("/", async (req, res) => {
    Status.updateOne({ name: req.body.name }, { $set: { check: req.body.check } })
        .exec()
        .then(data => {
            res.json({message:"เปลี่ยนสถานะแล้ว"})
        })
        .catch(err => {
            res.json({ message: err })
        });

});

module.exports = router;