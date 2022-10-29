const router = require("express").Router();
const { Product, Department } = require("../../models");
const withAuth = require("../../utils/auth");

// api/products/:id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      where: { department_id: req.params.id },
    });

    const dbDepartment = await Department.findByPk(req.params.id);
    const products = dbProducts.map((product) => {
      return product.get({ plain: true });
    });
    const department = dbDepartment.get({ plain: true });
    console.log("products", products);
    console.log("departments", department);
    res.render("products", {
      products,
      department,
      loggedInUser: req.session.userId,
    });
  } catch (err) {
    console.log("error loading products", err);
    res.status(500).json(err);
  }
});

module.exports = router;
