const router = require("express").Router();
const { CartItem, Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newCart = await CartItem.create({
      ...req.body,
      user_id: req.session.userId,
    });

    res.status(200).json(newCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    const dbCartItems = await CartItem.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: Product,
          attributes: ["product_name", "image", "description", "price"],
        },
      ],
    });
    const cartItems = dbCartItems.map((cartItem) => {
      return cartItem.get({ plain: true });
    });
    res.render("cart", {
      cartItems,
      loggedInUser: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const cartData = await CartItem.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(cartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
