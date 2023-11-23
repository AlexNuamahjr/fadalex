const express = require("express");
const isAuthenticated = require("../middleware/protect");
const {
    adminHome, 
    adminRegister, 
    adminLogin,
    adminDoctor,
    adminService,
    adminDepartment,
    adminServiceCreate,
    adminDoctorCreate,
    adminDepartmentCreate,
    createAdmin,
    adminLoginAccess,
    adminLogout,
    updateService,
    updateDoctor,
    updateDepartment,
    serviceDelete,
    deleteDepartment} = require('../controllers/adminController');
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
router.post("/doctors", adminDoctorCreate);
router.post("/departments", adminDepartmentCreate);
router.post("/register", createAdmin);
router.post("/login", adminLoginAccess);
router.post("/logout", adminLogout);
// Update routes
router.put("/services", updateService);
router.put("/doctors", updateDoctor);
router.put("/departments", updateDepartment);
// Delete routes
router.delete("/services", serviceDelete);
router.delete("/departments", deleteDepartment);
module.exports = router;
