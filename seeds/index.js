const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedDedepartment = require("./departmentData");
const seedProduct = require("./productData");
const seedCart = require("./cartData");
const seedOrder = require("./orderData");
const seedOrderedProducts = require("./orderedProductsData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedUser();
  await seedDedepartment();
  await seedProduct();
  // await seedCart();
  // await seedOrder();
  // await seedOrderedProducts();

  process.exit(0);
};

seedAll();
