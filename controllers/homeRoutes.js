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
  //delete 13-19
  req.session.save(() => {
    req.session.userId = 1;
    req.session.loggedIn = true;
  });

  if (req.session.loggedIn) {
    res.redirect("/api/departments");
    return;
  }
  res.render("login");
});

// router.get("/", async (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/departments");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
