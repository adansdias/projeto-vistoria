// backend/src/routes/clients.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/:id', clientController.getClientById);

module.exports = router;