const router = require("express").Router();
const {
  CartItem,
  Department,
  Order,
  OrderedProducts,
  Product,
  User,
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/api/departments");
      return;
    }

    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
