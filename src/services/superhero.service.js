const axios = require('axios');
const { SUPERHERO_MAX } = require('../config/constants');

const BASE_URL = `${process.env.SUPERHERO_API}/${process.env.SUPERHERO_API_KEY}`;

const getRandomHero = async () => {
  const randomId = Math.floor(Math.random() * SUPERHERO_MAX) + 1;

  const { data } = await axios.get(`${BASE_URL}/${randomId}`);

  if (data.response === 'error') {
    throw new Error('Superhero not found');
  }

  return {
    name: data.name,
    source: 'superhero',
    externalId: data.id,
    image: data.image?.url
  };
};

module.exports = {
  getRandomHero
};