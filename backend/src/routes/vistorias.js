// backend/src/routes/vistorias.js
const express = require('express');
const router = express.Router();
const vistoriaController = require('../controllers/vistoriaController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/', vistoriaController.createVistoria);
router.post('/ocorrencia', vistoriaController.createOcorrencia);

module.exports = router;