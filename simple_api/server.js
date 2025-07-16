const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");

const app = express();

// Environment configuration
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

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
    environment: NODE_ENV,
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
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, HOST, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Server running in ${NODE_ENV} mode`);
    console.log(`Listening at http://${HOST}:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
