module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tarjeta',
      'descubierta',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tarjeta', 'descubierta');
  }
};
