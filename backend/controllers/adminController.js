const User = require("../config/models/adminModels/userModel");
const Service = require("../config/models/adminModels/serviceModel");
const Department = require("../config/models/adminModels/departmentModel");
const {Doctor, EducationQualification} = require("../config/models/adminModels/doctorModel");
const workingHours = require("../config/models/adminModels/workinHoursModel");
const adminRegister = (req, res)=>{
    res.send("Register");
}

const adminLogin = (req, res) => {
    res.send("Login");
}

const adminHome = (req, res) =>{
    res.send("Home")
}

const adminService = (req, res)=>{
    res.send("Service");
}

const adminDoctor = (req, res)=>{
    res.send("Doctor");
}

const adminDepartment = (req, res)=>{
    res.send("Department");
}

module.exports = {
    adminLogin,
    adminRegister,
    adminHome,
    adminService,
    adminDoctor,
    adminDepartment
}