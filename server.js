require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/server.html'));
});

