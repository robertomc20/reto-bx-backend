const axios = require('axios');
const { RICK_AND_MORTY_MAX } = require('../config/constants');

const BASE_URL = process.env.RICK_AND_MORTY_API;

const getRandomCharacter = async () => {
  const randomId = Math.floor(Math.random() * RICK_AND_MORTY_MAX) + 1;

  const { data } = await axios.get(`${BASE_URL}/character/${randomId}`);

  return {
    name: data.name,
    source: 'rick_and_morty',
    externalId: data.id.toString(),
    image: data.image
  };
};

module.exports = {
  getRandomCharacter
};