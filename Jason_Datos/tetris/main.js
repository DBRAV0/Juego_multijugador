const express = require('express')
app = express()
app.listen(80)
app.get('/', function (req, res) {
  res.sendFile('index.html');
});