const ranking = (req, res) => {
  const data = ({
    season: '2018/1',
    team: 'Dynamox',
    matches: 4,
    ranking: [{
      julio: 5,
      felipe: 4,
      matias: 4,
      joao: 3,
      bernardo: 0,
    }],
  });
  res.status(200).send(data);
};

module.exports = ranking;
