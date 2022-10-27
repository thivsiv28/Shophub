const { Product } = require("../models");

const productdata = [
  {
    product_name: "Beef",
    description: "Fresh beef",
    price: 20,
    image: "",
    department_id: 1,
  },
  {
    product_name: "Chicken",
    description: "Fresh chicken",
    price: 16,
    image: "",
    department_id: 1,
  },
  {
    product_name: "Shrimp",
    description: "Fresh shrimp",
    price: 25,
    image: "",
    department_id: 1,
  },
  {
    product_name: "Iphone",
    description: "Iphone 14",
    price: 2000,
    image: "",
    department_id: 2,
  },
  {
    product_name: "Tablet",
    description: "Samsung Tablet",
    price: 1700,
    image: "",
    department_id: 2,
  },
  {
    product_name: "Earbuds",
    description: "Bose Earbuds",
    price: 500,
    image: "",
    department_id: 2,
  },
  {
    product_name: "Sofa",
    description: "Comfy Sofa",
    price: 2500,
    image: "",
    department_id: 3,
  },
  {
    product_name: "Dinning Table",
    description: "Nice dinning table",
    price: 2300,
    image: "",
    department_id: 3,
  },
  {
    product_name: "Mattress",
    description: "Comfy Mattress",
    price: 1000,
    image: "",
    department_id: 3,
  },
  {
    product_name: "Pen",
    description: "Handy Pen",
    price: 10,
    image: "",
    department_id: 4,
  },
  {
    product_name: "Pencil Sharpener",
    description: "Great pencil sharpener",
    price: 7,
    image: "",
    department_id: 4,
  },
  {
    product_name: "Notebook",
    description: "Thick notebook",
    price: 10,
    image: "",
    department_id: 4,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
