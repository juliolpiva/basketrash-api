
const faker = require('faker');

const team = (req, res) => {
  const company = faker.company.companyName();

  const data = ({
    name: company,
    slug: company.toLowerCase(),
    address: faker.address.city(),
  });
  res.status(200).send(data);
};

module.exports = team;
