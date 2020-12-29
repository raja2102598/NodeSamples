var mysql = require("mysql")

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
})

conn.connect((err, dbConn) => {
  if (err) {
    console.log(err)
  } else {
    console.log("db connected sucessfully")
  }
})

module.exports = conn
