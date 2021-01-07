const Router = require("express")

const projectController = require("../controller/projController")
const projectRoutes = (app) => {
  const router = new Router()

  // router.get("/")
  router.post("/", projectController.addProject)
  // router.put("/")
  // router.delete("/")

  app.use("/project", router)
}

module.exports = projectRoutes
