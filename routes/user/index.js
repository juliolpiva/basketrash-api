const faker = require('faker');

const userGet = (req, res) => {
  const data = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    team: 'chanfles',
  });
  res.status(200).send(data);
};

const userPost = (req, res) => {
  res.status(200).send(req.body);
};

const user = (app, url) => {
  app.get(url, userGet);
  app.post(url, userPost);
};

module.exports = user;
