const router = require("express").Router();
const { Product, Department } = require("../../models");
const withAuth = require("../../utils/auth");

// api/products/
router.get("/", withAuth, async (req, res) => {
  try {
    const product = await Product.findAll({
      include: {
        model: Department,
      },
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// api/products/:id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
