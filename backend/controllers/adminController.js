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
const updateService = async(req, res)=>{
    try {
        const {id} = req.query;
        const {service_title, service_content} = req.body;
        const updatedService = await Service.update({service_title, service_content}, {where: {id}});
        if (updatedService){
            return res.status(201).json({message: "Service update successfully"})
        }else{
            return res.status(404).json({message: "Unable to update service"})
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"})
    }
}
// Admin Doctor Page
const adminDoctor = (req, res)=>{
    res.send("Doctor");
};
// Admin Doctor Upload
const adminDoctorCreate = async(req, res)=>{
    const {name, specialization, brief_intro} = req.body;
    const {education_1, institution, year, about, 
            education_2, institution_2, year_2,about_2} = req.body;
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
// Update Doctor
const updateDoctor = async(req, res)=>{
    try {
        const {id} = req.query;
        const {name, specialization, brief_intro} = req.body;
            const {education_1, institution, year, about,
                education_2, institution_2, year_2, about_2} = req.body;
        const updatedDoctor = await Doctor.update({name, specialization, brief_intro},
            {education_1, institution, year, about,
            education_2, institution_2, year_2, about_2, where: {id}});
        if (updatedDoctor){
            return res.status(201).json({message: "Doctor updated successfully"});
        }else{
            return res.status(404).json({message: "Something went wrong"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"})
    }
}
// Admin Department Page
const adminDepartment = (req, res)=>{
    res.send("Department");
}
// Admin Department Upload
const adminDepartmentCreate = async(req, res)=>{
    const {department_title, department_content} = req.body;
    try {
        const createDepartment = await Department.create({department_title, department_content});
        if (createDepartment){
            return res.status(201).json({message: "Department created successfully"});
        }
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong"})
    }
};
// Update Department
const updateDepartment = async(req, res)=>{
    try {
        const {id} = req.query;
        const {department_title, department_content} = req.body;
        const updatedDepartment = await Department.update({department_title, department_content}, {where: {id}});
        if (updatedDepartment){
            return res.status(201).json({message: "Department updated successfully"});
        }else{
            return res.status(404).json({message: "Something went wrong"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal Server error"});
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
    adminLogout,
    updateService,
    updateDoctor,
    updateDepartment
}
