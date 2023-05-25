const {ensureIsOwner} = require("../middleware/authorization");
module.exports = app => {
  const branchService = require("../services/branch_service.js");
  const userService = require("../services/user_service.js");

  const router = require("express").Router();

  router.get("/branches", branchService.getAll);
  router.get("/branches/:id", branchService.getBranchById);
  router.put("/branches/:id/edit", ensureIsOwner, branchService.updateBranchById);

  router.get("/users", userService.getAll);
  router.get("/users/:id", userService.getUserById);

  app.use('/api', router);
};
