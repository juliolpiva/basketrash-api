const faker = require('faker');
const team = require('./team');
const season = require('./season');
const match = require('./match');
const event = require('./event');
const user = require('./user');
const ranking = require('./ranking');

const appRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.get('/user', user);
  app.get('/team', team);
  app.get('/season', season);
  app.get('/match', match);
  app.get('/event', event);
  app.get('/ranking', ranking);
  app.get('/users/:num', (req, res) => {
    const users = [];
    const { num } = req.params;

    if (isFinite(num) && num > 0) {
      for (i = 0; i <= num - 1; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
        });
      }

      res.status(200).send(users);
    } else {
      res.status(400).send({ message: 'invalid number supplied' });
    }
  });
};


module.exports = appRouter;
