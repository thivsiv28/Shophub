const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/api/products/:id', withAuth, async (req, res) => {
  try {
    const newProject = await Product.findAll({
        where: req.params.id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
