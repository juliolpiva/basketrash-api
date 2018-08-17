var express = require('express');
var app = express();

port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Basketrash running on port 3000!');
})

app.get('/', function (req, res) {
  res.json({ hello: 'basketrash!' });
});
