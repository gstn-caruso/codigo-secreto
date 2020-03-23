const _ = require('lodash');
const palabras = require('../palabras.json');
const Clave = require('./Clave');
const Tarjeta = require('./Tarjeta');

module.exports = class Tablero {

  constructor() {
    this.palabras = this.generarPalabras();
    this.clave = new Clave();
  }

  tarjetas = () => _.zip(this.palabras, this.clave.casillas).map((x) => new Tarjeta(x[0], x[1]));

  generarPalabras = () => {
    const palabrasRandom = _.shuffle(palabras.palabras);
    return _.take(palabrasRandom, 25);
  };
};
