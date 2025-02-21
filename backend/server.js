// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./src/routes/auth');
const clientRoutes = require('./src/routes/clients');
const fleetRoutes = require('./src/routes/fleets');
const vistoriaRoutes = require('./src/routes/vistorias');
const equipAcessoRoutes = require('./src/routes/equipAcesso');
const ocorrenciaRoutes = require('./src/routes/ocorrencia');
const vistoriaVeiculoRoutes = require('./src/routes/vistoria');
const vistoriaOcorrenciaRoutes = require('./src/routes/vistoria');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/fleets', fleetRoutes);
app.use('/api/vistorias', vistoriaRoutes);
app.use('/api/equip-acesso', equipAcessoRoutes);
app.use('/api/ocorrencias', ocorrenciaRoutes);
app.use('/api/vistoriasVeiculo', vistoriaVeiculoRoutes);
app.use('/api/vistoriasOcorrencia', vistoriaOcorrenciaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});