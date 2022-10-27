const { Model } = require('sequelize');
const User = require('./User');
const Department = require ('./Department');
const Product = require('./Product');
const OrderedProducts = require ('./OrderedProducts');
const CartItem = require('./CartItem');
const Order = require('./Order');

User.hasMany (CartItem, {
    foreignKey: user_id,
    onDelete: 'CASCADE',
},
CartItem.belongsTo (User, {
    foreignKey: user_id,
    onDelete: 'NO ACTION',
}),
User.hasMany (Order, {
    foreignKey: user_id,
    onDelete: 'CASCADE',
},
Order.belongsTo (User, {
    foreignKey: user_id,
    onDelete: 'NO ACTION',
}),
Order.hasMany (OrderedProducts, {
    foreignKey: order_id,
    onDelete: 'CASCADE',
}),
OrderedProducts.belongsTo ( Order, {
    foreignKey: order_id,
    onDelete: 'NO ACTION',
}),
Department.hasMany (Product, {
    foreignKey: department_id,
    onDelete: 'CASCADE',
}),
Product.belongsTo (Department, {
    foreignKey: department_id,
    onDelete: 'NO ACTION',
}),

Product.hasMany (CartItem, {
    foreignKey: product_id,
    onDelete: 'CASCADE',
}),
CartItem.belongsTo (Product, {
    foreignKey: product_id,
    onDelete: 'NO ACTION',
}),

Product.hasMany (OrderedProducts, {
    foreignKey: product_id,
    onDelete: 'CASCADE',
}),

OrderedProducts.belongsTo (Product, {
    foreignKey: product_id,
    onDelete: 'NO ACTION',
}),
)),

 module.exports = { User, Department, Product, OrderedProducts, CartItem, Order};
