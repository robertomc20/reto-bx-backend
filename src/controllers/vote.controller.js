const Character = require("../models/Character.model");

exports.voteCharacter = async (req, res) => {
  try {
    const { externalId, source, name, image, vote } = req.body;

    if (!externalId || !source || !name || !vote) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!["like", "dislike"].includes(vote)) {
      return res.status(400).json({ message: "Invalid vote type" });
    }

    let character = await Character.findOne({ externalId, source });

    if (!character) {
      character = new Character({
        externalId,
        source,
        name,
        image,
      });
    }

    if (vote === "like") character.likes += 1;
    if (vote === "dislike") character.dislikes += 1;

    character.lastVotedAt = new Date();

    await character.save();

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error voting character" });
  }
};
