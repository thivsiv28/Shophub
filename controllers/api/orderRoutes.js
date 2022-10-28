const router = require('express').Router();
const { Order, CartItem, OrderProduct } = require('./models');
const withAuth = require('../../utils/auth');

api.get('/orders', async (res, req) => {
	const userId = req.session.userId;
	await submitOrder({userId});
});


const submitOrder = async({ userId } ) => {
	// create new order
	const newOrder = await Order.create({
		userId
	});
	
	const cartItems = await CartItem.findAll({
		userId: userId
	});
	
	const orderedProducts = cartItems.map((cartItem) => {
		return {
			orderId: newOrder.id,
			productId: cartItem.id
		};
	});
	
	await OrderProduct.bulkCreate(orderedProducts);
	
	await Cart.destroy({
		where: {
			userId: userId
		}
	});

};



api.delete('api/cartItem/:id', async (req, res) => {
	await CartItem.destroy({
		where: {
			id: req.params.id
		}
	});
});

const elem = document.querySelector('.cartItem');
elem.addEventListener('click', function(event) { 
	const cartItemId =  event.target.getAttribute('data-id');
	
    const response = await fetch(`/api/cartItem/${cartItemId}`, {
      method: 'DELETE',
    });
});

module.exports = router;