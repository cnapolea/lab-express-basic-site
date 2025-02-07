const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
  res.sendFile(__dirname + '/views/works.html');
});

app.listen(8010, () => {
  console.log('Server fired up');
});
