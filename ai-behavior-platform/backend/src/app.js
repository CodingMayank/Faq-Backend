const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Behavior Platform API Running",
  });
});

module.exports = app;