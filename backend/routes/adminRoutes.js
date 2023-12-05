import express from "express";
import isAuthenticated from "../middleware/protect.js";
import {
    adminHome, 
    adminRegister, 
    adminLogin,
    adminDoctor,
    adminService,
    adminDepartment,
    adminServiceCreate,
    adminCreateDoctor,
    adminDepartmentCreate,
    createAdmin,
    adminLoginAccess,
    adminLogout,
    updateService,
    adminUpdateDoctor,
    updateDepartment,
    serviceDelete,
    deleteDepartment,
    adminDeleteDoctor} 
from '../controllers/adminController.js';
const router = express.Router();
// Get method routes
router.get("/", isAuthenticated, adminHome);
router.get("/register", adminRegister);
router.get("/login", adminLogin);
router.get("/services", isAuthenticated, adminService);
router.get("/doctors", isAuthenticated, adminDoctor);
router.get("/departments", isAuthenticated, adminDepartment);
// Post method routes
router.post("/services", adminServiceCreate);
router.post("/doctors", adminCreateDoctor);
router.post("/departments", adminDepartmentCreate);
router.post("/register", createAdmin);
router.post("/login", adminLoginAccess);
router.post("/logout", adminLogout);
// Update routes
router.put("/services", updateService);
router.put("/doctors", adminUpdateDoctor);
router.put("/departments", updateDepartment);
// Delete routes
router.delete("/services", serviceDelete);
router.delete("/departments", deleteDepartment);
router.delete("/doctors", adminDeleteDoctor);
// module.exports = router;
export default router;
