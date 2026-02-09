const express = require("express");
const router = express.Router();

const voteController = require("../controllers/vote.controller");

router.post("/", voteController.voteCharacter);

module.exports = router;
