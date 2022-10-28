const router = require ('express').Router();
const { restart } = require('nodemon');
const { Model } = require('sequelize');
const { Department, Product } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./productRoutes');


router.get('/api/departments', withAuth, async (req, res) =>{
    try {
        const enterDepartment = await Department.findAll();
        const departments = enterDepartment.get
        ({plain:true})
    res.render ('department', {
        departments,
        loggedInUser: req.session.userId,
    })
    }catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

route.get('/api/departments/:id/products', withAuth, async (req, res) => {
    //todo for thiviya, try/catch
    const products = await Product.findAll({
        where: {
            departmentId: req.params.id
        }
    });

    res.send(products);
});

module.exports = router;