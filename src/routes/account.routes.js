const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const accountController = require("../controllers/account.controller")

const accountRoutes = express.Router();

accountRoutes.post("/", authMiddleware.authMiddleware, accountController.createAccountController);

module.exports = accountRoutes