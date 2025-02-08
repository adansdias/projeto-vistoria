// backend/src/controllers/equipAcessoController.js
const db = require('../config/database');

// Função para listar todos os equipamentos de acesso
exports.listEquipAcesso = (req, res) => {
  const query = 'SELECT * FROM equip_acesso';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};