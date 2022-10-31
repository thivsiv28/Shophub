const { Product } = require("../models");

const productdata = [
  {
    product_name: "Beef",
    description: "Fresh beef",
    price: 20,
    image: "/images/Beef",
    department_id: 1,
  },
  {
    product_name: "Chicken",
    description: "Fresh chicken",
    price: 16,
    image: "/images/fresh chicken",
    department_id: 1,
  },
  {
    product_name: "Shrimp",
    description: "Fresh shrimp",
    price: 25,
    image: "/images/shrimp",
    department_id: 1,
  },
  {
    product_name: "Iphone",
    description: "Iphone 14",
    price: 2000,
    image: "/images/iPhone 14",
    department_id: 2,
  },
  {
    product_name: "Tablet",
    description: "Samsung Tablet",
    price: 1700,
    image: "/images/Samsung tablet",
    department_id: 2,
  },
  {
    product_name: "Earbuds",
    description: "Bose Earbuds",
    price: 500,
    image: "/images/Bose earphones",
    department_id: 2,
  },
  {
    product_name: "Sofa",
    description: "Comfy Sofa",
    price: 2500,
    image: "/images/Sofa",
    department_id: 3,
  },
  {
    product_name: "Dinning Table",
    description: "Nice dinning table",
    price: 2300,
    image: "/images/dining table",
    department_id: 3,
  },
  {
    product_name: "Mattress",
    description: "Comfy Mattress",
    price: 1000,
    image: "/images/mattress",
    department_id: 3,
  },
  {
    product_name: "Pen",
    description: "Handy Pen",
    price: 10,
    image: "/images/pen",
    department_id: 4,
  },
  {
    product_name: "Pencil Sharpener",
    description: "Great pencil sharpener",
    price: 7,
    image: "/images/pencil sharpener",
    department_id: 4,
  },
  {
    product_name: "Notebook",
    description: "Thick notebook",
    price: 10,
    image: "/images/Notebook",
    department_id: 4,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
