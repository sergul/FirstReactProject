const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config

const db = require('./utils/config').mongoURI;

// Connect to Mongo DB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    const { client } = mongoose.connection;
    console.log('Mongo DB is connected');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    collection.find().toArray().then((data) => {
      console.log(data);
    });
    client.close();
  }).catch((error) => {
    console.log(`Error: ${error}`);
  });

// Use routes
//app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));