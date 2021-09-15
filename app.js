const express = require('express');
const mongoose = require('mongoose');
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://localhost/motivation', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('open', () => {
  console.log("connected...")
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
})