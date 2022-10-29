const router = require("express").Router();
const { Order, CartItem, OrderedProducts } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    await submitOrder({ userId });
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

const submitOrder = async ({ userId }) => {
  const newOrder = await Order.create({
    user_id: userId,
  });

  const cartItems = await CartItem.findAll({
    where: {
      user_id: userId,
    },
  });

  const orderedProducts = cartItems.map((cartItem) => {
    return {
      order_id: newOrder.id,
      product_id: cartItem.product_id,
    };
  });

  await OrderedProducts.bulkCreate(orderedProducts, { individualHooks: true });

  await CartItem.destroy({
    where: {
      userId: userId,
    },
  });
};

module.exports = router;
