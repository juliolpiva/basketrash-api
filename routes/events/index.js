const faker = require('faker');
const moment = require('moment');

const eventsGet = (req, res) => {
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

const eventsPost = (req, res) => {
  res.status(200).send(req.body);
};

const events = (app, url) => {
  app.get(url, eventsGet);
  app.post(url, eventsPost);
};

module.exports = events;
