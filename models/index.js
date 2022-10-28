const { Model } = require('sequelize');
const User = require('./User');
const Department = require ('./Department');
const Product = require('./Product');
const OrderedProducts = require ('./OrderedProducts');
const CartItem = require('./CartItem');
const Order = require('./Order');

User.hasMany (CartItem, {
    onDelete: 'CASCADE',
});

CartItem.belongsTo (User, {
    onDelete: 'NO ACTION',
});

User.hasMany (Order, {
    onDelete: 'CASCADE',
});

Order.belongsTo (User, {
    onDelete: 'NO ACTION',
});

Order.hasMany (OrderedProducts, {
    onDelete: 'CASCADE',
});

OrderedProducts.belongsTo ( Order, {
    onDelete: 'NO ACTION',
});

Department.hasMany (Product, {
    onDelete: 'CASCADE',
});
Product.belongsTo (Department, {
    onDelete: 'NO ACTION',
});

Product.hasMany (CartItem, {
    onDelete: 'CASCADE',
});

CartItem.belongsTo (Product, {
    onDelete: 'NO ACTION',
});

Product.hasMany (OrderedProducts, {
    onDelete: 'CASCADE',
});

OrderedProducts.belongsTo (Product, {
    onDelete: 'NO ACTION',
});

 module.exports = { User, Department, Product, OrderedProducts, CartItem, Order};
