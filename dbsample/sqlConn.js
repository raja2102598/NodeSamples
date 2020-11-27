var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
});

conn.connect();
function addUser(inUserData, callback) {
  conn.query(
    "insert into users SET ?",
    inUserData,
    function (e, results, fields) {
      if (e) {
        console.log(e);
      } else if (results) {
        callback(null, results);
      } else {
        conn.end();
      }
    }
  );
}

//get all users
function receiveUser(callback) {
  var usersCollection = [];
  conn.query("select * from users", function (e, results, fields) {
    if (e) {
      console.log(e);
    } else if (results) {
      results.forEach((user) => {
        var users = {
          id: user.id,
          name: user.name,
          age: user.age,
          city: user.city,
          email: user.email,
        };
        usersCollection.push(users);
      });
      callback(null, usersCollection);
    } else {
      conn.end();
    }
  });
}

function deleteUser(id, callback) {
  conn.query("delete from users where id=?", id, function (e, results, fields) {
    if (e) {
      console.log(e);
    } else if (results) {
      callback(null, results);
    } else {
      conn.end();
    }
  });
}
module.exports = {
  receiveUser: receiveUser,
  addUser: addUser,
  deleteUser: deleteUser,
};
