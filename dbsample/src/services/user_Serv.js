var sqlconn = require("../dao/crud_users")

//ADD
function adduser(req, callback) {
  var userInput = req.body

  sqlconn.addUser(userInput, function (e, result) {
    if (e) {
      console.log(e)
      callback(null, err)
    } else if (result) {
      // res.send("1 Row Added Successfully")
      callback(null, result)
    }
  })
}

//READ
function getusers(callback) {
  sqlconn.receiveUser(function (e, result) {
    if (e) {
      console.log(e)
      callback(null, e)
    } else if (result) {
      // res.send(result)
      callback(null, result)
    }
  })
}

//UPDATE

function updateuser(req, callback) {
  var userInput = req.body

  sqlconn.updateUser(userInput, function (e, result) {
    if (e) {
      console.log(e)
      callback(null, e)
    } else if (result) {
      // res.send("1 Row Added Successfully")
      callback(null, result)
    }
  })
}

//DELETE
function deleteuser(req, callback) {
  var userid = req.body

  sqlconn.deleteUser(userid, function (e, result) {
    if (e) {
      console.log(e)
      callback(null, e)
    } else if (result) {
      // res.send(result)
      callback(null, result)
    }
  })
}

module.exports = {
  adduser,
  getusers,
  deleteuser,
  updateuser,
}
