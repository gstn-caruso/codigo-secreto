const express = require('express');
const path = require('path');
const app = express();
const models = require('../models');
// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');


// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.post('/api/tablero/crear', (req, res) => {
  res.set('Content-Type', 'application/json');
  models.Tablero.create().then(tablero => res.send(JSON.stringify({ tablero: tablero }, null, 2)));
});

app.get('/api/tablero/:id', (req, res) => {
  res.set('Content-Type', 'application/json');
  models.Tablero.findByPk(req.params.id, { include: ['tarjetas'] }).then(tablero => {
    res.send(JSON.stringify({ tablero: tablero }, null, 2));
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
