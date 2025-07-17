const express = require("express");
const config = require("./config");
const api = require("./api");
const bodyParser = require("body-parser");

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }

  next();
});
app.use(bodyParser.json());
app.use("/api", api);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Simple API is running",
    environment: config.NODE_ENV,
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
    method: req.method
  });
});

// For local development
if (!config.isProduction || !process.env.VERCEL) {
  app.listen(config.PORT, config.HOST, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Server running in ${config.NODE_ENV} mode`);
    console.log(`Listening at http://${config.HOST}:${config.PORT}`);
  });
}

// Export for Vercel
module.exports = app;
