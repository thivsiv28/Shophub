const { Department } = require("../models");

const departmentdata = [
  {
    department_name: "Groceries",
    department_image: "Food images.jpeg",
  },
  {
    department_name: "Electronics",
    department_image: "Electronics.jpeg",
  },
  {
    department_name: "Furniture",
    department_image: "furniture.jpeg",
  },
  {
    department_name: "Office Supplies",
    department_image: "Office Supplies.jpeg",
  },
];

const seedDepartment = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartment;
