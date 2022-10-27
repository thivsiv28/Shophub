const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey: true,
            references: { 
                model: 'Product', 
                key: 'id',
            },

        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey: true,
            references: { 
                model: 'User', 
                key: 'id',
            },
        },
    }
);

module.exports = CartItem;