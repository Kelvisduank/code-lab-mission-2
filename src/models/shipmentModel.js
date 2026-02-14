let shipments = [];
let idCounter = 1;

const getAll = () => shipments;

const getById = (id) => {
  return shipments.find(s => s.id === id);
};

const create = (data) => {
  const newShipment = {
    id: idCounter++,
    ...data
  };

  shipments.push(newShipment);
  return newShipment;
};

const update = (id, data) => {
  const shipment = getById(id);
  if (!shipment) return null;

  Object.assign(shipment, data);
  return shipment;
};

const remove = (id) => {
  const index = shipments.findIndex(s => s.id === id);
  if (index === -1) return false;

  shipments.splice(index, 1);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
