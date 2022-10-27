const { Model } = require('sequelize');
const User = require('./User');
const Department = require ('./Department');
const Product = require('./Product');
const OrderedProducts = require ('./OrderedProducts');
const CartItem = require('./CartItem');
const Order = require('./Order');


 Product.belongsTo(User, {

 })

 module.exports = { User, Department, Product, OrderedProducts, CartItem, Order};
