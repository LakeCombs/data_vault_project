const { Router } = require("express");
const { userlogin, RegisterUser } = require("../controller/userController");

const appRouter = Router();

appRouter.post("/login", userlogin);
appRouter.post("/register", RegisterUser);

module.exports = appRouter;
