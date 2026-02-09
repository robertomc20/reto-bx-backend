const express = require("express");
const router = express.Router();

const characterController = require("../controllers/character.controller");

router.get("/random", characterController.getRandomCharacter);

module.exports = router;
