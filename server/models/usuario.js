module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  Usuario.associate = function(models) {
    Usuario.belongsToMany(models.Tablero, { through: 'UsuarioTablero' });
  };

  return Usuario;
};