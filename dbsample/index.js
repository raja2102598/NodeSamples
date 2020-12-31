var express = require("express")
var body_parser = require("body-parser")

var sqlconn = require("./src/dao/crud_users")
var projConn = require("./src/dao/crud_proj")

var app = express()
app.use(body_parser.json())

//CREATE
app.post("/users", (req, res) => {
  var userInput = req.body

  sqlconn.addUser(userInput, function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send("1 Row Added Successfully")
    }
  })
})

//READ
app.get("/users", (req, res) => {
  sqlconn.receiveUser(function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send(result)
    }
  })
})

//UPDATE
app.put("/users", (req, res) => {
  var userInput = req.body

  sqlconn.updateUser(userInput, function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send("1 Row Added Successfully")
    }
  })
})

//DELETE
app.delete("/users", (req, res) => {
  var userid = req.body

  sqlconn.deleteUser(userid, function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send(result)
    }
  })
})

app.post("/project", (req, res) => {
  var userInput = req.body

  projConn.addProject(userInput, function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send("Added Successfully")
      console.log("Added Successfully in DB")
    }
  })
})

// //READ
// app.get("/project", (req, res) => {
//   sqlconn.receiveUser(function (e, result) {
//     if (e) {
//       console.log(e)
//     } else if (result) {
//       res.send(result)
//     }
//   })
// })

// //UPDATE
// app.put("/project", (req, res) => {
//   var userInput = req.body

//   sqlconn.updateUser(userInput, function (e, result) {
//     if (e) {
//       console.log(e)
//     } else if (result) {
//       res.send("1 Row Added Successfully")
//     }
//   })
// })

// //DELETE
// app.delete("/project", (req, res) => {
//   var userid = req.body

//   sqlconn.deleteUser(userid, function (e, result) {
//     if (e) {
//       console.log(e)
//     } else if (result) {
//       res.send(result)
//     }
//   })
// })

//SERVER
app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  )
})
