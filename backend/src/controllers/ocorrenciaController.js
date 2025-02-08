const db = require('../config/database');

// Função para listar todas as ocorrências de um veículo específico
exports.listOcorrenciasByVeiculo = (req, res) => {
  const { id_veiculo } = req.params;
  const query = 'SELECT * FROM ocorrencia WHERE id_veiculo = ? ORDER BY created_at DESC';
  
  db.query(query, [id_veiculo], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};