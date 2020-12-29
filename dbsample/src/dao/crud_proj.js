var conn = require("../common/sqlConn")

//CREATE USER FUNCTION
function addProject(projectData, callback) {
  var ModifiedData = modifyUiData(projectData)

  conn.query("insert into project SET ?", ModifiedData, function (e, results) {
    if (e) {
      console.log(e)
    } else if (results) {
      assignProject(results.insertId, projectData.stakeholders)
      // console.log(results)
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

function assignProject(projectId, stakeHolders) {
  stakeHolders.forEach((student) => {
    var Mappeddata = getMap(projectId, student.rollno)
    conn.query(
      "insert into project_user_map set ?",
      Mappeddata,
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          // console.log("success")
        }
      }
    )
  })
}

function modifyUiData(uiResults) {
  var dbResult = {}

  dbResult.p_name = uiResults.project_name
  dbResult.company = uiResults.company
  dbResult.descrip = uiResults.desc

  return dbResult
}

function getMap(p_id, r_no) {
  var dbResult = {}

  dbResult.proj_id = p_id
  dbResult.stud_id = r_no
  dbResult.status = "new"

  return dbResult
}

module.exports = {
  addProject,
}
