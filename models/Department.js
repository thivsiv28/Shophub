const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,

        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
     
    }
);

module.exports = Department;