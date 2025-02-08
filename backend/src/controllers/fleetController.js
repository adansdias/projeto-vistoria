// backend/src/controllers/fleetController.js
const db = require('../config/database');

exports.getFleetByPlate = (req, res) => {
  const query = `
    SELECT f.*, s.name as secretary_name 
    FROM fleets f 
    JOIN secretaries s ON f.secretary_id = s.id 
    WHERE f.plate = ?
  `;
  db.query(query, [req.params.plate], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(404).json({ error: 'Fleet not found' });
    res.json(results[0]);
  });
};