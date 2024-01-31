const devskills = [
  {
    id: 1,
    skillName: 'HTML5',
    description:
      'HTML5 is the latest version of the Hypertext Markup Language that enables the creation of modern and interactive websites.'
  },
  {
    id: 2,
    skillName: 'CSS',
    description:
      'CSS (Cascading Style Sheets) is a styling language used to control the visual appearance of web pages, allowing for the customization of elements such as layout, colors, fonts, and animations.'
  },
  {
    id: 3,
    skillName: 'JavaScript',
    description:
      'JavaScript is a programming language that enables interactive and dynamic behavior on web pages, adding functionality such as event handling, data manipulation, and asynchronous communication.'
  },
  {
    id: 4,
    skillName: 'Node.js',
    description:
      'Node.js is a JavaScript runtime environment that allows for server-side execution of JavaScript, enabling the development of scalable and high-performance web applications.'
  },
  {
    id: 5,
    skillName: 'Express.js',
    description:
      'Express.js is a minimal and flexible web application framework for Node.js, designed to simplify the process of building robust and scalable web applications and APIs.'
  }
]

const getAll = () => {
  return devskills
}

const getOne = (id) => {
  let devskill = devskills.find((devskill) => {
    return devskill.id === parseInt(id)
  })
  return devskill
}

const create = (devskill) => {
  devskill.id = Date.now() % 1000000
  devskill.description = 'description'
  devskills.push(devskill)
}

const deleteOne = (id) => {
  const index = devskills.findIndex((devskill) => {
    return devskill.id === parseInt(id)
  })
  devskills.splice(index, 1)
}

const updateOne = (id, updatedSkill) => {
  const devSkillUpdate = devskills.find((devskill) => {
    return devskill.id === parseInt(id)
  })
  console.log(devSkillUpdate)
  devSkillUpdate.skillName = updatedSkill
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
