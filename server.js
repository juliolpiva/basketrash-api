const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongourl = process.env.DB || 'mongodb+srv://juliolpiva:julio757@basketrashdatabase-qyink.mongodb.net/test?retryWrites=true';

MongoClient.connect(mongourl,  { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);

  const db = database.db('basketrash');
  routes(app, db);

  db.collection('Users').find().toArray((dbErr, result) => {
    if (dbErr) {
      console.log(dbErr);
    }
    console.log(result);
  });

  database.close();

  app.listen(port, () => {
    console.log('Basketrash running on port 3000!');
  });
});

