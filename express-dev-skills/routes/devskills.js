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
//DELETE /devskills/:id
router.delete('/:id', devskillsCtrl.deleteSkill)
//GET /devskills/:id/edit
router.get('/:id/edit', devskillsCtrl.edit)
//PUT /devskills/:id
router.put('/:id', devskillsCtrl.updateSkill)

module.exports = router
