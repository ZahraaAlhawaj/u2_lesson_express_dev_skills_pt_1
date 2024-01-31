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

const newSkill = (req, res) => {
  res.render('devskills/new')
}

const create = (req, res) => {
  Devskill.create(req.body) //req.body.(name from form)
  res.redirect('/devskills')
}

const deleteSkill = (req, res) => {
  Devskill.deleteOne(req.params.id)
  res.redirect('/devskills')
}

const edit = (req, res) => {
  const devskill = Devskill.getOne(req.params.id)
  res.render('devskills/edit', { devskill })
}

const updateSkill = (req, res) => {
  let devskillId = req.params.id
  let updatedSkill = req.body.skillName
  console.log(updatedSkill)
  Devskill.updateOne(devskillId, updatedSkill)
  res.redirect('/devskills/' + devskillId)
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
  edit,
  updateSkill
}
