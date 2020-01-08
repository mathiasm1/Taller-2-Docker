const api = require("../../helpers/api");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const trace = require("../../helpers/trace");
const date = require("../../helpers/date");

router.get("/getUF", async function(req, res) {
  trace.trackEvent(`Request a /api/getUF correcta.`);
  const request = await fetch(api.uriConfig.api.getUF(date.fechaNow()), {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  }).catch(error => {
    console.log(`error: ${error}`);
    trace.trackException(
      `Error llamando a ${api.uriConfig.api.getUF(
        "fecha en formato dd-mm-yyyy"
      )}. Error: ${error}`
    );
    res.status(500).send({
      msg:
        "Ha ocurrido un error llamando al API para obtener la información solicitada.",
      ok: false
    });
    res.end();
  });

  const response = await request.json();
  const [{ valor }] = response.serie;
  console.log(valor);
  if (response) {
    trace.trackEvent(`Llamada a servicio correcta.`, valor);
    res.send(`Valor de la UF hoy: ${date.fechaNow()} es :$ ${valor}`);
    res.end();
  } else {
    trace.trackException(
      `Error llamando a ${api.uriConfig.apiQR.tokens}. Error: ${error}`
    );
    res.status(500).send({
      msg:
        "Ha ocurrido un error llamando al API para obtener la información solicitada.",
      ok: false
    });
    res.end();
  }
});
module.exports = router;
