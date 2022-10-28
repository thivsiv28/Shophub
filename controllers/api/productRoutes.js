const router = require("express").Router();
const { Product, Department } = require("../../models");
const withAuth = require("../../utils/auth");

// api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      where: { department_id: req.params.id },
    });

    const dbDepartment = await Department.findByPk({
      where: { id: req.params.id },
    });
    const products = dbProducts.map((product) => {
      return product.get({ plain: true });
    });
    const department = dbDepartment.get({ plain: true });
    console.log(products);
    console.log(department);
    res.render("products", {
      products,
      department,
      loggedInUser: res.session.userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
