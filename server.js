const express = require('express');
const app = express();
const path = require('path');

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})