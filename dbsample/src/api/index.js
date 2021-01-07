var express = require("express")
var body_parser = require("body-parser")

var app = express()
app.use(body_parser.json())

require("../router/user_router")(app)
require("../router/project_router")(app)

//SERVER
app.listen(5000, () => {
  console.log(
    "Server Started\n=============================\nRunning At Port 5000\n============================="
  )
})