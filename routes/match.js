
const faker = require('faker');
const moment = require('moment');

const match = (req, res) => {
  const name = faker.lorem.slug();

  const data = ({
    name,
    datetime: moment(),
    wind: Math.round(Math.random() * 4),
    rain: (Math.random() > 0.5),
    season: 'chanfles',
    team: 'chanfles',
  });
  res.status(200).send(data);
};

module.exports = match;
