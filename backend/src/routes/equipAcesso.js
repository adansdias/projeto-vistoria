// backend/src/routes/equipAcesso.js
const express = require('express');
const router = express.Router();
const equipAcessoController = require('../controllers/equipAcessoController');

// Definir a rota para listar todos os equipamentos de acesso
router.get('/', equipAcessoController.listEquipAcesso);

module.exports = router;