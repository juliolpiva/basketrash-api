
const faker = require('faker');
const moment = require('moment');

const event = (req, res) => {
  const agent = faker.internet.email();
  const type = 'Score';

  const data = ({
    agent,
    reporter: agent,
    type,
    datetime: moment(),
    reportDatetime: moment(),
    season: 'chanfles',
    team: 'chanfles',
    match: 'chanfles',
  });
  
  res.status(200).send(data);
};

module.exports = event;
