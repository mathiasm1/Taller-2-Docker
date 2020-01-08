const express = require("express");
const router = express.Router();

const numero = require("../../helpers/numero");

router.get("/:numero", (req, res) => {
  res.status(200).send({ Numero: numero.NumeroALetras(req.params.numero) });
});
module.exports = router;
