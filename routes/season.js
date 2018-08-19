
const moment = require('moment');
const Duration = require('duration-js');

const season = (req, res) => {
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

module.exports = season;
