import express from "express";
import { 
    clientHome,
    clientAbout,
    clientService,
    clientDoctors,
    clientContact,
    clientDepartment,
    clientContactCreate,
    clientAppointment,
    clientAppointmentCreate} from "../controllers/clientController.js";
const clientRouter = express.Router();

clientRouter.get("/", clientHome);
clientRouter.get("/about-us", clientAbout);
clientRouter.get("/services", clientService);
clientRouter.get("/doctors", clientDoctors);
clientRouter.get("/contact-us", clientContact);
clientRouter.get("/departments", clientDepartment);
clientRouter.get("/appointment", clientAppointment);

// Post routes
clientRouter.post("/contact-us", clientContactCreate);
clientRouter.post("/appointment", clientAppointmentCreate);

export default clientRouter;