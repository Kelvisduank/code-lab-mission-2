const shipmentModel = require('../models/shipmentModel');

const list = (req, res) => {
  res.json(shipmentModel.getAll());
};

const get = (req, res) => {
  const id = Number(req.params.id);
  const shipment = shipmentModel.getById(id);

  if (!shipment) {
    return res.status(404).json({ message: " Ops! Remessa não encontrada" });
  }

  res.json(shipment);
};

const create = (req, res) => {
  const { weight, status, origin, destination, carID, date } = req.body;

  if (!weight || !status || !origin || !destination || !carID || !date) {
    return res.status(400).json({ message: "Tamanho, status, origem, destino, ID do carro e data são necessários!" });
  }

  const newShipment = shipmentModel.create({ weight, status, origin, destination, carID, date });

  res.status(201).json(newShipment);
};

const update = (req, res) => {
  const id = Number(req.params.id);

  const updatedShipment = shipmentModel.update(id, req.body);

  if (!updatedShipment) {
    return res.status(404).json({ message: " Ops! Remessa não encontrada" });
  }

  res.json(updatedShipment);
};

const remove = (req, res) => {
  const id = Number(req.params.id);

  const deleted = shipmentModel.remove(id);

  if (!deleted) {
    return res.status(404).json({ message: " Ops! Remessa não encontrada" });
  }

  res.status(204).send();
};

module.exports = {
  list,
  get,
  create,
  update,
  remove
};