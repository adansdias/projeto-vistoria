// backend/src/controllers/clientController.js
const db = require('../config/database');

exports.getClientById = (req, res) => {
  const query = 'SELECT * FROM clients';
  db.query(query,  (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json(results[0]);
  });
};