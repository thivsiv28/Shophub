const router = require("express").Router();
const { restart } = require("nodemon");
const { Model } = require("sequelize");
const { Department, Product } = require("../../models");
const withAuth = require("../../utils/auth");
const { route } = require("./productRoutes");

router.get("/api/departments", withAuth, async (req, res) => {
  try {
    const dbDepartments = await Department.findAll();
    const departments = dbDepartments.get({ plain: true });
    res.render("departments", {
      departments,
      loggedInUser: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
