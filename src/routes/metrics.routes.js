const express = require("express");
const router = express.Router();

const metricsController = require("../controllers/metrics.controller");

router.get("/top-liked", metricsController.getTopLiked);
router.get("/top-disliked", metricsController.getTopDisliked);
router.get("/last", metricsController.getLastVoted);

module.exports = router;
