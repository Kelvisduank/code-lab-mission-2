const express = require('express');
const app = express();

const shipmentRoutes = require('./src/routes/shipmentRoutes');

app.use(express.json());

app.use('/shipments', shipmentRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
