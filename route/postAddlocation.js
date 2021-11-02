const express = require('express');
const addlocation = require('../model/addlocation');
const router = express.Router();


router.post("/", (req, res) => {
    const post = new addlocation({
        name: req.body.name,
        sector: req.body.sector,
        province: req.body.provinece,
        district: req.body.district,
        type: req.body.type,
        imageurl: req.body.imageurl,
        opentime: req.body.opentime,
        closetime: req.body.closetime,
        toilet: req.body.toilet,
        parking: req.body.parking,
        detail: req.body.detail,
        contact: req.body.contact,
        security: req.body.security,
        location: req.body.location
    });
    post.save()
        .then(data => {
            res.json({message:"ลงสถานที่เสร็จสิ้น กรุณารอทีมงานตรวจสอบ"})
        })
        .catch(err => {
            res.json({ message: err })
        });
});

module.exports = router;