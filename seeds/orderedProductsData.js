const { OrderedProducts } = require("../models");

const orderedproductsdata = [
  {
    product_id: 1,
    order_id: 1,
  },
  {
    product_id: 4,
    order_id: 1,
  },
  {
    product_id: 2,
    order_id: 2,
  },
  {
    product_id: 5,
    order_id: 2,
  },
  {
    product_id: 6,
    order_id: 3,
  },
  {
    product_id: 1,
    order_id: 3,
  },
  {
    product_id: 3,
    order_id: 4,
  },
  {
    product_id: 8,
    order_id: 4,
  },
];

const seedOrderedProducts = () =>
  OrderedProducts.bulkCreate(orderedproductsdata);

module.exports = seedOrderedProducts;
