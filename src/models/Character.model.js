const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    source: {
      type: String,
      required: true,
      enum: ['rickandmorty', 'pokemon', 'superhero'],
      index: true
    },
    externalId: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    lastEvaluatedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

CharacterSchema.index({ source: 1, externalId: 1 }, { unique: true });

module.exports = mongoose.model('Character', CharacterSchema);