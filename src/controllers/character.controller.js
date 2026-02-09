const rickMortyService = require("../services/rickAndMorty.service");
const pokemonService = require("../services/pokemon.service");
const superheroService = require("../services/superhero.service");
const Character = require("../models/Character.model");

const getRandomCharacter = async (req, res) => {
  try {
    const { category } = req.query;

    let character;

    switch (category) {
      case "rick_and_morty":
        character = await rickMortyService.getRandomCharacter();
        break;

      case "pokemon":
        character = await pokemonService.getRandomPokemon();
        break;

      case "superhero":
        character = await superheroService.getRandomHero();
        break;

      default:
        return res.status(400).json({
          message: "Invalid category. Use rick_and_morty, pokemon or superhero",
        });
    }

    return res.status(200).json(character);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Error getting character" });
  }
};

const getPikachuStatus = async (req, res) => {
  try {
    const pikachu = await Character.findOne({
      source: "pokemon",
      externalId: "25",
    });

    if (!pikachu) {
      return res.status(404).json({
        exists: false,
        message: "Pikachu has not yet been evaluated.",
      });
    }

    return res.json({
      exists: true,
      data: {
        name: pikachu.name,
        likes: pikachu.likes,
        dislikes: pikachu.dislikes,
        lastEvaluatedAt: pikachu.lastEvaluatedAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error obtaining Pikachu status",
    });
  }
};

module.exports = {
  getRandomCharacter,
  getPikachuStatus,
};
