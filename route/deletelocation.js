const mongoose = require('mongoose');
const Status = require("../model/updateStatus")
const router = require("express").Router();

router.delete("/:LocationID", (req, res, next) => {
    const locationid = req.params.LocationID;
    Status.remove({ _id: locationid })
        .exec()
        .then(data => {
            res.json({message:"ทำการลบเสร็จสิ้น"})
        })
        .catch(err => {
            res.json({ message: err })
        });
});

module.exports = router;
