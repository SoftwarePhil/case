const path = require('path');
const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use('/', proxy('https://pzj9cridzd.execute-api.us-east-1.amazonaws.com'))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
