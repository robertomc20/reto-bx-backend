const axios = require("axios");
const { POKEMON_MAX } = require("../config/constants");

const BASE_URL = process.env.POKEMON_API;

const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * POKEMON_MAX) + 1;

  const { data } = await axios.get(`${BASE_URL}/${randomId}`);

  return {
    name: data.name,
    source: "pokemon",
    externalId: data.id.toString(),
    image: data.sprites.front_default,
  };
};

module.exports = {
  getRandomPokemon,
};
