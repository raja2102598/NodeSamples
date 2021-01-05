const userService = require("../services/user_Serv")

async function getUser(req, res) {
  try {
    const result = userService.getusers((err, result) => {
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

async function addUser(req, res) {
  try {
    const result = userService.adduser(req, (err, result) => {
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

async function updateUser(req, res) {
  try {
    const result = userService.updateuser(req, (err, result) => {
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

async function deleteUser(req, res) {
  try {
    const result = userService.deleteuser(req, (err, result) => {
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
  addUser,
  deleteUser,
  getUser,
  updateUser,
}
