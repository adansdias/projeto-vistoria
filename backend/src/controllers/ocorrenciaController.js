const db = require('../config/database');

// Função para listar todas as ocorrências de um veículo específico
exports.listOcorrenciasByVeiculo = (req, res) => {
  const { id_veiculo } = req.params;
  //const query = 'SELECT * FROM ocorrencia WHERE id_veiculo = ? ORDER BY created_at DESC';
   const query = 'SELECT ocorrencia.id, ocorrencia.id_equip_acesso, ocorrencia.id_status, ocorrencia.obs, ocorrencia.created_at, equip_acesso.descricao AS equip_acesso_descricao, status.descricao AS status_descricao, fleets.plate as Placa FROM ocorrencia JOIN equip_acesso ON ocorrencia.id_equip_acesso = equip_acesso.id JOIN status ON ocorrencia.id_status = status.id join fleets on ocorrencia.id_veiculo = fleets.id where id_veiculo = ? ORDER BY created_at DESC ';
  db.query(query, [id_veiculo], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};