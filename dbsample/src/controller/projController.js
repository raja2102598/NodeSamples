const projService = require("../services/project_Serv")

async function addProject(req, res) {
  try {
    const result = projService.addproject(req, (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addProject,
}
