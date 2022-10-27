const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderedProducts extends Model {}

OrderedProducts.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,

        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,

        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
    }
);

module.exports = OrderedProducts;