const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init (
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
    }
);

module.exports = CartItem;