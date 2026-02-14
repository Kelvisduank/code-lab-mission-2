const shipmentModel = require('../models/shipmentModel');

const list = (req, res) => {
  res.json(shipmentModel.getAll());
};

const get = (req, res) => {
  const id = Number(req.params.id);
  const shipment = shipmentModel.getById(id);

  if (!shipment) {
    return res.status(404).json({ message: "Shipment not found" });
  }

  res.json(shipment);
};

const create = (req, res) => {
  const { weight, status } = req.body;

  if (!weight || !status) {
    return res.status(400).json({ message: "Weight and status required" });
  }

  const newShipment = shipmentModel.create({ weight, status });

  res.status(201).json(newShipment);
};

const update = (req, res) => {
  const id = Number(req.params.id);

  const updatedShipment = shipmentModel.update(id, req.body);

  if (!updatedShipment) {
    return res.status(404).json({ message: "Shipment not found" });
  }

  res.json(updatedShipment);
};

const remove = (req, res) => {
  const id = Number(req.params.id);

  const deleted = shipmentModel.remove(id);

  if (!deleted) {
    return res.status(404).json({ message: "Shipment not found" });
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