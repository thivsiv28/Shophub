const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { 
                model: 'department', 
                key: 'id',
            }
        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product',
    }
);

module.exports = Product;