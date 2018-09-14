const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  console.log(req);
  res.send('Hello');
});

module.exports = app;
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });
