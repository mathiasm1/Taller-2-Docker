const express = require("express");
const router = express.Router();

const QR = require("../../helpers/qrGenerator");

router.get("/", (req, res)=> {
  res.status(200).send(QR.generateQR());
});
module.exports = router;
