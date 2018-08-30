
const faker = require('faker');


const teamGet = (req, res) => {
  const company = faker.company.companyName();

  const data = ({
    name: company,
    slug: company.toLowerCase(),
    address: faker.address.city(),
  });
  res.status(200).send(data);
};

const teamPost = (req, res) => {
  res.status(200).send(req.body);
};

const team = (app, url) => {
  app.get(url, teamGet);
  app.post(url, teamPost);
};

module.exports = team;
