const express = require('express');
const router = express.Router();
const vistoriaController = require('../controllers/vistoriaController');

// Rota para listar todas as vistorias de um veículo específico
router.get('/veiculo/:id_veiculo', vistoriaController.listVistoriasByVeiculo);

// Rota para listar todas as ocorrências de uma vistoria específica
router.get('/:id_vistoria/ocorrencias', vistoriaController.listOcorrenciasByVistoria);

module.exports = router;