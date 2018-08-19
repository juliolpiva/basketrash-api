
const faker = require('faker');

const user = (req, res) => {
  const data = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    team: 'chanfles',
  });
  res.status(200).send(data);
};

module.exports = user;
