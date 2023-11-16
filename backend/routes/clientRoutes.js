const express = require("express");
const { 
    clientHome,
    clientAbout,
    clientService,
    clientDoctors,
    clientContact,
    clientDepartment
 } = require("../controllers/clientController");
const clientRouter = express.Router();

clientRouter.get("/", clientHome);
clientRouter.get("/about-us", clientAbout);
clientRouter.get("/services", clientService);
clientRouter.get("/doctors", clientDoctors);
clientRouter.get("/contact", clientContact);
clientRouter.get("/departments", clientDepartment);

module.exports = clientRouter;