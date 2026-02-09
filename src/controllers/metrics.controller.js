const Character = require("../models/Character.model");

exports.getTopLiked = async (req, res) => {
  const character = await Character.findOne().sort({ likes: -1 });

  if (!character) {
    return res.status(404).json({ message: "No data yet" });
  }

  res.json(character);
};

exports.getTopDisliked = async (req, res) => {
  const character = await Character.findOne().sort({ dislikes: -1 });

  if (!character) {
    return res.status(404).json({ message: "No data yet" });
  }

  res.json(character);
};

exports.getLastVoted = async (req, res) => {
  const character = await Character.findOne().sort({ lastVotedAt: -1 });

  if (!character) {
    return res.status(404).json({ message: "No data yet" });
  }

  res.json(character);
};
