const express = require('express');

const route = express.Router();
const autoresController =
  require('../controllers/autoresController');

route.get('/', autoresController.listar);
route.get('/:id/editar', autoresController.editar);
route.get('/criar', autoresController.criar);
route.post('/', autoresController.inserir);
route.post('/:id', autoresController.atualizar);

module.exports = route;