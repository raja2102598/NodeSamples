var projConn = require("../dao/crud_proj")

function addproject(req, callback) {
  var userInput = req.body

  projConn.addProject(userInput, function (e, result) {
    if (e) {
      console.log(e)
      callback(null, err)
    } else if (result) {
      // res.send("Added Successfully")
      console.log("Added Successfully in DB")
      callback(null, result)
    }
  })
}

module.exports = {
  addproject,
}
