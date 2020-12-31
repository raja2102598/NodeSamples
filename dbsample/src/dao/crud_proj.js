var conn = require("../common/sqlConn")

//CREATE USER FUNCTION
function addProject(projectData, callback) {
  var ModifiedData = modifyUiData(projectData)

  conn.query("insert into project SET ?", ModifiedData, function (e, results) {
    if (e) {
      console.log(e)
    } else if (results) {

      assignProject(results.insertId, projectData.stakeholders, (e, res) => {
        if (e) {
          console.log(e)
        } else {
          // console.log(res)
        }
      })

      assignTasks(results.insertId, projectData.stakeholders, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          // console.log(res)
        }
      })
      // console.log(results)
      callback(null, results)
    } else {
      conn.end()
    }
  })
}




function assignProject(projectId, stakeHolders, callback) {
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
          callback(null, result)
        }
      }
    )
  })
}

function assignTasks(projectId, stakeHolders, callback) {
  stakeHolders.forEach((student) => {
    // var tasks = student.tasks
    student.tasks.forEach((task) => {
      // console.log(task.name);
      var Mappeddata = getMapTask(projectId, student.rollno, task.name)
      conn.query(
        "insert into user_tasks set ?",
        Mappeddata,
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            // console.log("success")
            callback(null, result)
          }
        }
      )
    })
    // console.log("break");
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

function getMapTask(p_id, r_no,t_name) {
  var dbResult = {}

  dbResult.proj_id = p_id
  dbResult.stud_id = r_no
  dbResult.task_name = t_name

  return dbResult
}

module.exports = {
  addProject,
}
