const { Department } = require("../models");

const departmentdata = [
  {
    department_name: "Groceries",
  },
  {
    department_name: "Electronics",
  },
  {
    department_name: "Furniture",
  },
  {
    department_name: "Office Supplies",
  },
];

const seedDepartment = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartment;
