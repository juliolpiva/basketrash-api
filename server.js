var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Basketrash!');
});

app.listen(3000, function () {
  console.log('Basketrash running on port 3000!');
})