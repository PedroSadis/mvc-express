const { where } = require('sequelize');
const autores = require('../models/autores');

const autoresController = {
  listar: async (req, res) => {
    const todosAutores = await autores.findAll();
    res.render('autores/listar', { autores: todosAutores });
  },
  criar: async (req, res) => {
    res.render('autores/criar');
  },
  inserir: async (req, res) => {
    const novoAutor = {
      nome: req.body.nome,
      genero: req.body.genero,
      data_nascimento: req.body.data_nascimento
    };
    await autores.create(novoAutor);
    res.redirect('/autores');
  },
  editar: async (req, res) => {
    const autorId = req.params.id;
    const autor = await autores.findByPk(autorId);
    res.render('autores/editar', { autor });
  },
  
  atualizar: async (req, res) => {
    const autorId = req.params.id;
    const autorAtualizado = {
      nome: req.body.nome,
      genero: req.body.genero,
      data_nascimento: req.body.data_nascimento
    };
    await autores.update(autorAtualizado, {
      where: { id: autorId }
    });
    res.redirect('/autores');
  }
};

module.exports = autoresController;
