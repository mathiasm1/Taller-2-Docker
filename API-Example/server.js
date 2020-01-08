var config = require("./settings/appsettings.secrets.json");
const dateRoutes = require("./src/routes/date.routes");
const ufRoutes = require("./src/routes/uf.routes");
const numeroRoutes = require("./src/routes/numero.routes");
const qrRoutes = require("./src/routes/qr.routes");

const express = require("express");
const cors = require("cors");

// Constants
let { allowedOrigins, HOST, PORT } = config;

// App
const app = express();

app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "Origen " + "no permitido.";
        console.log(msg + " origin:" + origin);
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.use((req, res, next) => {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", () => {
    req.body = data;
    next();
  });
});

//Routes
app.use("/edad", dateRoutes);
app.use("/uf", ufRoutes);
app.use("/numero", numeroRoutes);
app.use("/qr", qrRoutes);

//Middleware
app.use(express.json());

app.listen(PORT, HOST);
console.log(`Corriendo  API en http://${HOST}:${PORT}`);

module.exports = app;
