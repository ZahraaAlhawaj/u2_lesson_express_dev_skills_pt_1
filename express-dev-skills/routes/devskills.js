var express = require('express')
var router = express.Router()

const devskillsCtrl = require('../controllers/devskills')

/* GET / devskills */
router.get('/', devskillsCtrl.index)
//Get /  devskills/new
router.get('/new', devskillsCtrl.newSkill)
//GET / devskills/:id
router.get('/:id', devskillsCtrl.show)

//POST /
router.post('/', devskillsCtrl.create)

module.exports = router
