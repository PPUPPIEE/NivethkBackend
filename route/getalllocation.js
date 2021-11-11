const router = require("express").Router();
const location = require("../model/searchResult");

router.get("/", async (req, res) => {
    try {
      const result = await location.aggregate([
        { $project: { __v: 0 } },
      ]);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

);

module.exports = router;
