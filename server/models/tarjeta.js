'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarjeta = sequelize.define('Tarjeta', {
    palabra: {
      type: DataTypes.STRING,
      allowNull: false
    },
    agente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descubierta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });
  Tarjeta.associate = function(models) {
    Tarjeta.belongsTo(models.Tablero, { as: 'Tablero' });
  };

  return Tarjeta;
};