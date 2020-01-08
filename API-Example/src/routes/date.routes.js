const express = require("express");
const router = express.Router();

const date = require("../../helpers/date");

router.get("/:date", (req, res) => {
  res.status(200).send({ edad: date.calculateAge(req.params.date).toString() });
});
module.exports = router;
