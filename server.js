const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(port, () => {
  console.log('Basketrash running on port 3000!');
});

