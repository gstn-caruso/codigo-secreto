const morgan = require('morgan');
const express = require('express');
const path = require('path');
const models = require('../models');
const app = express();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

app.use(express.static(CLIENT_BUILD_PATH));
app.use(express.json());
app.use(morgan('combined'));

// API
app.post('/api/tablero/crear', (req, res) => {
  models.Tablero.create().then(tablero => {
    res.json({ tablero: tablero });
  });
});

app.get('/api/tablero/:id', (req, res) => {
  models.Tablero.findByPk(req.params.id, {
    include: ['tarjetas'],
    order: [['tarjetas', 'id', 'ASC']]
  }).then(tablero => {
    res.json({ tablero: tablero });
  });
});

app.patch('/api/tarjeta/:id', (req, res) => {
  models.Tarjeta.findByPk(req.params.id).then(tarjeta => {
    tarjeta.descubierta = req.body.descubierta;
    tarjeta.save().then(tarjetaActualizada => {
      res.json({ tarjeta: tarjetaActualizada });
    });
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
