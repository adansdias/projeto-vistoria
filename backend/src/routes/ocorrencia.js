const express = require('express');
const router = express.Router();
const ocorrenciaController = require('../controllers/ocorrenciaController');

// Rota para listar todas as ocorrências de um veículo específico
router.get('/veiculo/:id_veiculo', ocorrenciaController.listOcorrenciasByVeiculo);

module.exports = router;
