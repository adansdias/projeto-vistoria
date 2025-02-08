// backend/src/controllers/vistoriaController.js
const db = require('../config/database');

exports.createVistoria = (req, res) => {
  const { id_veiculo } = req.body;
  const id_user = req.user.id;

  const query = 'INSERT INTO vistoria (id_veiculo, id_user) VALUES (?, ?)';
  db.query(query, [id_veiculo, id_user], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json({ id: results.insertId });
  });
};

exports.createOcorrencia = (req, res) => {
  const { id_veiculo, id_equip_acesso, id_status, obs, id_vistoria } = req.body;
  const id_user = req.user.id;

  const query = `
    INSERT INTO ocorrencia 
    (id_veiculo, id_equip_acesso, id_status, id_user, obs, id_vistoria) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [id_veiculo, id_equip_acesso, id_status, id_user, obs, id_vistoria],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.json({ id: results.insertId });
    }
  );
};