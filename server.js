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

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server started on port ${PORT}`);
});

app.post('/CelToFah', (req, res) => {
  let t = +req.body.t;
  let ans = t * (9/5) + 32;
  res.send(JSON.stringify(ans));
}

app.post('/CelToKel', (req, res) => {
  let t = +req.body.t;
  let ans = t + 273.15;
  res.send(JSON.stringify(ans));
}

app.post('/FahToCel', (req, res) => {
  let t = +req.body.t;
  let ans = (t - 32) * (5/9);
  res.send(JSON.stringify(ans));
}

