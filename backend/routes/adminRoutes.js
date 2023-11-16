const express = require("express");
const {adminHome, adminRegister, adminLogin} = require('../controllers/adminController');
const router = express.Router();

router.get("/admin", adminHome);
router.get("/admin/register", adminRegister);
router.get("/admin/login", adminLogin);

module.exports = router;