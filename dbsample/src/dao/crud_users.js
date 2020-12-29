var conn = require("../common/sqlConn")

//CREATE USER FUNCTION
function addUser(inUserData, callback) {
  var ModifiedData = modifyUiData(inUserData)

  conn.query("insert into users SET ?", ModifiedData, function (e, results) {
    if (e) {
      console.log(e)
    } else if (results) {
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

//READ USERS FUNCTION
function receiveUser(callback) {
  var usersCollection = []
  conn.query("select * from users", function (e, results) {
    if (e) {
      console.log(e)
    } else if (results) {
      results.forEach((user) => {
        var users = modifyDbData(user)
        usersCollection.push(users)
      })
      callback(null, usersCollection)
    } else {
      conn.end()
    }
  })
}

//UPDATE USER FUNCTION
function updateUser(inUserData, callback) {
  var ModifiedData = modifyUiData(inUserData)
  var user = {
    id: inUserData.user_id,
  }
  conn.query(
    "update users SET ? where ?",
    [ModifiedData, user],
    function (e, results) {
      if (e) {
        console.log(e)
      } else if (results) {
        callback(null, results)
      } else {
        conn.end()
      }
    }
  )
}

//DELETE USER FUNCTION
function deleteUser(inpUser, callback) {
  var user = {
    id: inpUser.user_id,
  }
  conn.query("delete from users where ?", user, function (e, results) {
    if (e) {
      console.log(e)
    } else if (results) {
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

function modifyDbData(dbResults) {
  var uiResult = {}

  uiResult.user_id = dbResults.id
  uiResult.user_name = dbResults.name
  uiResult.user_age = dbResults.age
  uiResult.user_city = dbResults.city
  uiResult.user_email = dbResults.email

  return uiResult
}
function modifyUiData(uiResults) {
  var dbResult = {}

  dbResult.name = uiResults.user_name
  dbResult.age = uiResults.user_age
  dbResult.city = uiResults.user_city
  dbResult.email = uiResults.user_email

  return dbResult
}

module.exports = {
  receiveUser: receiveUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
}
