
const moment = require('moment');
const Duration = require('duration-js');

const seasonGet = (req, res) => {
  const initialDate = moment();
  const finalDate = moment().add(10, 'days');
  const chanfles = new Duration(finalDate - initialDate);

  const data = ({
    team: 'chanfles',
    slug: '2018/1',
    initialDate,
    finalDate,
    duration: chanfles.days(),
  });
  res.status(200).send(data);
};

const seasonPost = (req, res) => {
  res.status(200).send(req.body);
};

const season = (app, url) => {
  app.get(url, seasonGet);
  app.post(url, seasonPost);
};

module.exports = season;
