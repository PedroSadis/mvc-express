const { DataTypes} = require('sequelize');
const DB = require('../db');
const autores = require('./autores')

const livros = DB.define('livros', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

livros.belongsTo(autores, { foreignKey: 'autor_id', as: 'autor' });
module.exports = livros;