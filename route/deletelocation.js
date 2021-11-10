const mongoose = require('mongoose');
const Status = require("../model/updateStatus")
const router = require("express").Router();

router.delete("/:Name", (req, res, next) => {
    const Name = req.params.Name;
    Status.remove({ name: Name })
        .exec()
        .then(data => {
            res.json({message:"ทำการลบ " + req.params.Name + " เสร็จสิ้น"})
        })
        .catch(err => {
            res.json({ message: err })
        });
});

module.exports = router;
