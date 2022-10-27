const { Order } = require("../models");

const orderdata = [
  {
    user_id: 1,
  },
  {
    user_id: 2,
  },
  {
    user_id: 3,
  },
  {
    user_id: 4,
  },
];

const seedOrder = () => Order.bulkCreate(orderdata);

module.exports = seedOrder;
