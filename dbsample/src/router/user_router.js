const Router = require("express")

const userController = require("../controller/userController")

const userRoutes = (app) => {
  const router = new Router()

  router.get("/", userController.getUser)
  router.post("/", userController.addUser)
  router.put("/", userController.updateUser)
  router.delete("/", userController.deleteUser)

  app.use("/user", router)
}

module.exports = userRoutes
