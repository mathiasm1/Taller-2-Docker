let qr = require("qr-image");
const URL = require("../settings/appsettings.secrets.json");


/**
 * Genera un codigo QR que redirige a una ruta definida.
 * @version        1.0.0 - 08 Ene 2020
 * @author         Mathias Molina - math1asm1
 * @returns {svg} : 08-01-2020
 */
const generateQR=()=> {
  const code = qr.imageSync(URL.Ngrok, {
    type: "svg",
    size: 10,
    margin: 2
  });
  return code;
}

module.exports = { generateQR };
