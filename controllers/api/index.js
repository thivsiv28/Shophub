const router = require("express").Router();
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const departmentRoutes = require("./departmentRoutes");
const cartRoutes = require("./cartRoutes");

// api/users -> userRoutes
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/departments", departmentRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
