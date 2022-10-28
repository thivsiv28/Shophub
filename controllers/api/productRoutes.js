const router = require("express").Router();
const { Product, Department } = require("../../models");
const withAuth = require("../../utils/auth");

// api/products/:id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      where: { department_id: req.params.id },
    });

    if (dbProducts) {
      const products = dbProducts.get({ plain: true });
      res.render("products", {
        products,
        loggedInUser: res.session.userId,
      });
    } else {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
