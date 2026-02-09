const express = require("express");
const cors = require("cors");

const characterRoutes = require("./routes/character.routes");
const voteRoutes = require("./routes/vote.routes");
const metricsRoutes = require("./routes/metrics.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/characters", characterRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/metrics", metricsRoutes);

module.exports = app;
