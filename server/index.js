const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
}
const serveAbout = (req, res, next) => {
  res.send('<h1>About</h1>');
}
const serveHello = (req, res, next) => {
    const name = req.query.username || 'unregistered person';
    res.send(`Hello ${username}`);// here you wrote username, but you did not declare it anywhere. you should have used name.
}
const serveData = (req, res, next) => {
  const data = [{ username: 'Elver_Galarga' }, { username: 'Ana_Lisa_Melculo' }, { username: 'Elva_Gina' }, { username: 'Debora_Melo' }];
  res.send(data);
}

// endpoints
app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
