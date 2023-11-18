const User = require("../config/models/adminModels/userModel");
const Service = require("../config/models/adminModels/serviceModel");
const Department = require("../config/models/adminModels/departmentModel");
const {Doctor, EducationQualification} = require("../config/models/adminModels/doctorModel");
const workingHours = require("../config/models/adminModels/workinHoursModel");
const { json } = require("body-parser");
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

const adminServiceCreate = async(req, res)=>{
    const {service_title, service_content} = req.body;
    console.log(req.body);
    try {
        const service = await Service.create({service_title, service_content});
        console.log(service);
        res.status(200).json({message: "Service created successfully"});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong!"});
    }
};

const adminDoctor = (req, res)=>{
    res.send("Doctor");
}

const adminDoctorCreate = async(req, res)=>{
    const {name, specialization, brief_intro} = req.body;
    const {education, institution, year, about, education_2, institution_2, year_2,
        about_2} = req.body;
    try {
        await Doctor.create({name, specialization, brief_intro});
        await EducationQualification.create({education, institution, year, about,
            education_2, year_2, institution_2, about_2,});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong"});
    }
}

const adminDepartment = (req, res)=>{
    res.send("Department");
}

const adminDepartmentCreate = async(req, res)=>{
    const {department_title, department_content} = req.body;
    try {
        await Department.create({department_title, department_content});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong"})
    }
}

module.exports = {
    adminLogin,
    adminRegister,
    adminHome,
    adminService,
    adminDoctor,
    adminDepartment,
    adminServiceCreate,
    adminDoctorCreate,
    adminDepartmentCreate
}