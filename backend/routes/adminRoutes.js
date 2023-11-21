const express = require("express");
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
router.get("/admin", adminHome);
router.get("/admin/register", adminRegister);
router.get("/admin/login", adminLogin);
router.get("/admin/services", adminService);
router.get("/admin/doctors", adminDoctor);
router.get("/admin/departments", adminDepartment);

// Post method routes
router.post("/admin/services", adminServiceCreate);
router.post("/admin/doctor", adminDoctorCreate);
router.post("/admin/department", adminDepartmentCreate);
router.post("/admin/register", createAdmin);
router.post("/admin/login", adminLoginAccess);
router.post("/admin/logout", adminLogout);


module.exports = router;