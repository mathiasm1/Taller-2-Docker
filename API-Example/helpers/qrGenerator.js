let qr = require("qr-image");
const res = require("../settings/appsettings.secrets.json");
function generateQR() {
  const code = qr.imageSync(res.Ngrok, {
    type: "svg",
    size: 10,
    margin: 2
  });
  return code;
}

module.exports = { generateQR };
