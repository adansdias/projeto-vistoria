// backend/src/controllers/vistoriaController.js
const db = require('../config/database');


// Função para listar todas as vistorias de um veículo específico
exports.listVistoriasByVeiculo = (req, res) => {
  const { id_veiculo } = req.params;
  const query = 'SELECT vistoria.id, vistoria.id_veiculo, usuarios.nome as nome, vistoria.created_at FROM vistoria join usuarios on vistoria.id_user = usuarios.id WHERE id_veiculo = ? ORDER BY created_at DESC';
  
  db.query(query, [id_veiculo], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

// Função para listar todas as ocorrências de uma vistoria específica
exports.listOcorrenciasByVistoria = (req, res) => {
  const { id_vistoria } = req.params;
  const query = 'SELECT ocorrencia.id, ocorrencia.id_equip_acesso, ocorrencia.id_status, ocorrencia.created_at,equip_acesso.descricao AS equip_acesso_descricao,status.descricao AS status_descricao,ocorrencia.obs,usuarios.nome as Vistoriador,fleets.plate as Placa FROM ocorrencia JOIN equip_acesso ON ocorrencia.id_equip_acesso = equip_acesso.id JOIN status ON ocorrencia.id_status = status.id join fleets on ocorrencia.id_veiculo = fleets.id join usuarios on ocorrencia.id_user = usuarios.id where id_vistoria = ? ORDER BY created_at DESC';
  
  db.query(query, [id_vistoria], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

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