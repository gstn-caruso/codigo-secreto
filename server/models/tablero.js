const _ = require('lodash');
const palabras = require('./palabras');
const Clave = require('../src/clave');

const generarPalabras = () => {
  const palabrasRandom = _.shuffle(palabras.palabras);
  return _.take(palabrasRandom, 25);
};

module.exports = (sequelize, DataTypes) => {
  const Tablero = sequelize.define('Tablero', {
    siguienteJugador: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(tablero) {
        const posiblesAgentes = ['agenteRojo', 'agenteAzul'];
        tablero.siguienteJugador = _.sample(posiblesAgentes);
      },
      afterCreate(tablero) {
        const palabras = generarPalabras();
        const clave = new Clave(tablero.siguienteJugador);
        _.zip(palabras, clave.casillas).map((x) => {
          sequelize.models.Tarjeta.create({ palabra: x[0], agente: x[1], TableroId: tablero.id });
        });
      }
    }
  });
  Tablero.associate = function(models) {
    Tablero.hasMany(models.Tarjeta, { as: 'tarjetas' });
    Tablero.belongsToMany(models.Usuario, { through: 'UsuarioTablero' });
  };
  return Tablero;
};