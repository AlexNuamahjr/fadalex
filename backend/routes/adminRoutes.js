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
    adminLogout} = require('../controllers/adminController');
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
router.post("/department", adminDepartmentCreate);
router.post("/register", createAdmin);
router.post("/login", adminLoginAccess);
router.post("/logout", adminLogout);


module.exports = router;