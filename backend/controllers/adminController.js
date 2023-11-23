const User = require("../config/models/adminModels/userModel");
const Service = require("../config/models/adminModels/serviceModel");
const Department = require("../config/models/adminModels/departmentModel");
const {Doctor, EducationQualification} = require("../config/models/adminModels/doctorModel");
const workingHours = require("../config/models/adminModels/workinHoursModel");
const bcrypt = require("bcrypt");

// Admin Register Page
const adminRegister = (req, res)=>{
    res.send("Register");
};
// Admin Register
const createAdmin = async(req, res)=>{
    const {email, user_name, password, is_admin} = req.body;
    try {
       if (!email || !password){
        return res.status(400).json({message: "Enter a valid email and password"});
       }
       currentUser = await User.findOne({where: {is_admin: true}});
       if (!currentUser){
        return res.status(401).json({message: "You don't have admin privileges"});
       }
       const salt = 10;
       const hashedPassword = await bcrypt.hash(password, salt);

       const newAdmin = await User.create({
        email: email,
        user_name: user_name,
        password: hashedPassword,
        is_admin: true
       });
       console.log(newAdmin);
       return res.status(200).json({message: "Admin created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"});
    }
};
// Admin Login Page
const adminLogin = (req, res) => {
    res.send("Login");
};
// Admin Login Access
const adminLoginAccess = async (req, res)=>{
    const {email, user_name, password} = req.body;

    try {
        const userExists = await User.findOne({where: {email: email}});
        if (!userExists){
            return res.status(404).json({message: "Invalid credentials"})
        }
        const correctPassword = userExists.password;
        const isCorrectPassword = await bcrypt.compare(password, correctPassword);
        if (!isCorrectPassword){
            return res.status(404).json({message: "Invalid credentials"});
        }else{
            req.session.user = userExists.user_name;
            return res.status(201).json({message: "Login successfully"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"});
    }
};
// Admin Logout
const adminLogout = async (req, res)=>{
    try {
        req.session.destroy((error)=>{
            if (error){
                return res.status(401).json({message: "Login failes"});
            }else{
                return res.status(201).json({message: "Logout successfully"});
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"});
    }
};
// Admin Home Page
const adminHome = (req, res) =>{
    res.send("Home")
};
// Admin Service Page
const adminService = (req, res)=>{
    res.send("Service");
};
// Admin Service Upload
const adminServiceCreate = async(req, res)=>{
    const {service_title, service_content} = req.body;
    console.log(req.body);
    try {
        const service = await Service.create({service_title, service_content});
        console.log(service);
        return res.status(200).json({message: "Service created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong!"});
    }
};
// Update Service

// Admin Doctor Page
const adminDoctor = (req, res)=>{
    res.send("Doctor");
};
// Admin Doctor Upload
const adminDoctorCreate = async(req, res)=>{
    const {name, specialization, brief_intro} = req.body;
    const {education_1, institution, year, about, education_2, institution_2, year_2,
        about_2} = req.body;
    try {
        await Doctor.create({name, specialization, brief_intro});
        await EducationQualification.create({education_1, institution, year, about,
            education_2, year_2, institution_2, about_2,});
        return res.status(200).json({message: "Doctor created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"});
    }
};
// Admin Department Page
const adminDepartment = (req, res)=>{
    res.send("Department");
}
// Admin Department Upload
const adminDepartmentCreate = async(req, res)=>{
    const {department_title, department_content} = req.body;
    try {
        await Department.create({department_title, department_content});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong"})
    }
};

module.exports = {
    adminLogin,
    adminRegister,
    adminHome,
    adminService,
    adminDoctor,
    adminDepartment,
    adminServiceCreate,
    adminDoctorCreate,
    adminDepartmentCreate,
    createAdmin,
    adminLoginAccess,
    adminLogout
}
