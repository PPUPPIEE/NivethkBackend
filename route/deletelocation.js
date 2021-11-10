const mongoose = require('mongoose');
const Status = require("../model/updateStatus")
const router = require("express").Router();

router.delete("/", (req, res, next) => {
    Status.remove({ name: req.body.name })
        .exec()
        .then(data => {
            res.json({message:"ทำการลบ " + req.body.name + " เสร็จสิ้น"})
        })
        .catch(err => {
            res.json({ message: err })
        });
});

module.exports = router;
