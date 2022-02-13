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

app.post('/convert', (req, res) => {
  let t = +req.body.t;
  let convert = req.body.convert;
  let ans;
  switch(convert) {
  case 'CF':
    ans = t * (9/5) + 32;
    break;
  case 'CK':
    ans = t + 273.15;
    break;
  case 'FC':
    ans = (t - 32) * (5/9);
    break;
  case 'FK':
    ans = (t + 459.67) * (5/9);
    break;
  case 'KC':
    ans = t - 273.15;
    break;
  case 'KF':
    ans = t * (9/5) - 459.67;
    break;
  }
  res.send(JSON.stringify(ans));
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server started on port ${PORT}`);
});

