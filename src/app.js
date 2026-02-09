const express = require("express");
const cors = require("cors");

const characterRoutes = require("./routes/character.routes");
const voteRoutes = require("./routes/vote.routes");
const metricsRoutes = require("./routes/metrics.routes");

const app = express();

const corsOptions = {
  origin: [
    process.env.FRONTEND_URL, // front local
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/characters", characterRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/metrics", metricsRoutes);

module.exports = app;
