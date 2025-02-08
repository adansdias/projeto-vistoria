// backend/src/routes/fleets.js
const express = require('express');
const router = express.Router();
const fleetController = require('../controllers/fleetController');

router.get('/:plate', fleetController.getFleetByPlate);

module.exports = router;