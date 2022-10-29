const router = require("express").Router();
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const departmentRoutes = require("./departmentRoutes");
const cartRoutes = require("./cartRoutes");
const orderRoutes = require("./orderRoutes");

// api/users -> userRoutes
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/departments", departmentRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);

module.exports = router;
