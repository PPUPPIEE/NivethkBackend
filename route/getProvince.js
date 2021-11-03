const Province = require("../model/province")
const router = require("express").Router();

router.get("/",async(req,res)=>{
    try{
        const province = await  Province.aggregate([{$project:{_id:0,__v:0}}])
        res.status(200).json(province)
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;