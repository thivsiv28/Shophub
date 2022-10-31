const { Department } = require("../models");

const departmentdata = [
  {
    department_name: "Groceries",
    department_image: "",
  },
  {
    department_name: "Electronics",
    department_image: "",
  },
  {
    department_name: "Furniture",
    department_image: "",
  },
  {
    department_name: "Office Supplies",
    department_image: "",
  },
];

const seedDepartment = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartment;
