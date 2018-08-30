const team = require('./team');
const season = require('./season');
const match = require('./match');
const events = require('./events');
const user = require('./user');
const ranking = require('./ranking');

const appRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  user(app, '/user');
  team(app, '/team');
  season(app, '/season');
  match(app, '/match');
  events(app, '/event');
  ranking(app, '/ranking');
};


module.exports = appRouter;
