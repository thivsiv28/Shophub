const router = require ('express').Router();
const { restart } = require('nodemon');
const { Model } = require('sequelize');
const { Department } = require('../../models');
const withAuth = require('../../utils/auth');


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
module.exports = router;