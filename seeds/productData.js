const { Product } = require("../models");

const productdata = [
  {
    product_name: "Beef",
    description: "Fresh beef",
    price: 20,
    image: "Beef.jpeg",
    department_id: 1,
  },
  {
    product_name: "Chicken",
    description: "Fresh chicken",
    price: 16,
    image: "fresh chicken.jpeg",
    department_id: 1,
  },
  {
    product_name: "Shrimp",
    description: "Fresh shrimp",
    price: 25,
    image: "Shrimp.jpeg",
    department_id: 1,
  },
  {
    product_name: "Iphone",
    description: "Iphone 14",
    price: 2000,
    image: "iPhone 14.jpeg",
    department_id: 2,
  },
  {
    product_name: "Tablet",
    description: "Samsung Tablet",
    price: 1700,
    image: "Samsung tablet.jpeg",
    department_id: 2,
  },
  {
    product_name: "Earbuds",
    description: "Bose Earbuds",
    price: 500,
    image: "Bose earphones.jpeg",
    department_id: 2,
  },
  {
    product_name: "Sofa",
    description: "Comfy Sofa",
    price: 2500,
    image: "Sofa.png",
    department_id: 3,
  },
  {
    product_name: "Dinning Table",
    description: "Nice dinning table",
    price: 2300,
    image: "dining table.jpeg",
    department_id: 3,
  },
  {
    product_name: "Mattress",
    description: "Comfy Mattress",
    price: 1000,
    image: "mattress.png",
    department_id: 3,
  },
  {
    product_name: "Pen",
    description: "Handy Pen",
    price: 10,
    image: "pen.jpg",
    department_id: 4,
  },
  {
    product_name: "Pencil Sharpener",
    description: "Great pencil sharpener",
    price: 7,
    image: "pencil sharpener.jpg",
    department_id: 4,
  },
  {
    product_name: "Notebook",
    description: "Thick notebook",
    price: 10,
    image: "Notebook.jpeg",
    department_id: 4,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
