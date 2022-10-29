const router = require("express").Router();
const { Department, Product } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbDepartments = await Department.findAll({});

    const departments = dbDepartments.map((department) =>
      department.get({ plain: true })
    );
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
