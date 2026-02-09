const Vote = require("../models/Vote.model.js");

const voteCharacter = async ({ externalId, source, name, voteType }) => {
  const update =
    voteType === "like" ? { $inc: { likes: 1 } } : { $inc: { dislikes: 1 } };

  const vote = await Vote.findOneAndUpdate(
    { externalId, source },
    {
      ...update,
      $set: { name, lastVotedAt: new Date() },
    },
    { new: true, upsert: true },
  );

  return vote;
};

module.exports = {
  voteCharacter,
};
