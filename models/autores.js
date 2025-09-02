const { DataTypes } = require('sequelize')
const DB = require('../db');
const livros = require('./livros')

const autores = DB.define('autores', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});


module.exports = autores;