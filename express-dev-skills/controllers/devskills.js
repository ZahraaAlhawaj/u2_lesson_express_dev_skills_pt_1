const Devskill = require('../models/devskill')

const index = (req, res) => {
  const devskills = Devskill.getAll()
  const title = 'Developer Skills'
  res.render('devskills/index', { devskills, title })
}

const show = (req, res) => {
  const devskills = Devskill.getOne(req.params.id)
  res.render('devskills/show', { devskills })
}

module.exports = {
  index,
  show
}
