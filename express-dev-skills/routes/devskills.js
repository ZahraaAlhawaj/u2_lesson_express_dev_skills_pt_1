var express = require('express')
var router = express.Router()

const devskillsCtrl = require('../controllers/devskills')

/* GET /todos */
router.get('/', devskillsCtrl.index)
//GET /todos/:id
router.get('/:id', devskillsCtrl.show)

module.exports = router
