var express = require("express")
var body_parser = require("body-parser")

var sqlconn = require("./sqlConn")

var app = express()

app.use(body_parser.json());

app.get("/users", (req, res) => {
  sqlconn.receiveUser(function (e, result) {
    if (e) {
      console.log(e)
    } else if (result) {
      res.send(result)
    }
  })
})

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

app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  );
});
