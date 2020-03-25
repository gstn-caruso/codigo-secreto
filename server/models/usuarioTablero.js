'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UsuarioTablero', {
    UsuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    TableroId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tablero',
        key: 'id'
      }
    }
  });
};