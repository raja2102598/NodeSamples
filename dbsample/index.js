var express = require("express");
var body_parser = require("body-parser");

var sqlconn = require("./sqlConn");

var app = express();

app.use(body_parser.json());

app.get("/users/receive", (req, res) => {
  sqlconn.receiveUser(function (e, result) {
    if (e) {
      console.log(e);
    } else if (result) {
      res.send(result);
    }
  });
});

app.post("/users/add", (req, res) => {
  var userInput = req.body;

  sqlconn.addUser(userInput, function (e, result) {
    if (e) {
      console.log(e);
    } else if (result) {
      res.send("1 Row Added Successfully");
    }
  });
});

app.post("/users/delete", (req, res) => {
  var userid = req.body.id;

  sqlconn.deleteUser(userid, function (e, result) {
    if (e) {
      console.log(e);
    } else if (result) {
      res.send(result);
    }
  });
});

app.post;
app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  );
});
