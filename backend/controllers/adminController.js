const User = require("../config/models/adminModels/userModel");
const Service = require("../config/models/adminModels/serviceModel");
const Department = require("../config/models/adminModels/departmentModel");
const Doctor = require("../config/models/adminModels/doctorModel");
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
                return res.status(401).json({message: "Login failed"});
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
// Admin Service Create
const adminServiceCreate = async(req, res)=>{
    try {
        const {service_title, service_content} = req.body;
        const service = await Service.create({service_title, service_content});
        if (service){
            return res.status(200).json({message: "Service created successfully"});
        }else{
            return res.status(404).json({message: "Something went wrong!"})
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"});
    }
};
// Update Service
const updateService = async(req, res)=>{
    try {
        const {id} = req.query;
        const {service_title, service_content} = req.body;
        const updatedService = await Service.update({service_title, service_content}, {where: {id}});
        if (updatedService > 0){
            return res.status(201).json({message: "Service update successfully"})
        }else{
            return res.status(404).json({message: "Service not found"})
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"})
    }
};
// Delete Service
const serviceDelete = async(req, res)=>{
    try {
        const {id} = req.query;
        const deleteService = await Service.destroy({where: {id}});
        if (deleteService){
            return res.status(201).json({message: "Service deleted  successfully"});
        }else{
            return res.status(404).json({message: "Service not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"})
    }
}
// Admin Doctor Page
const adminDoctor = (req, res)=>{
    res.send("Doctor");
};
// Admin Create Doctor
const adminCreateDoctor = async(req, res)=>{
    try {
        const {doctor_name, specialization, brief_intro,
            education_1, institution, year, about,
            education_2, institution_2, year_2, about_2} = req.body;
        const doctor = await Doctor.create({doctor_name, specialization, brief_intro,
                                    education_1, institution, year, about,
                                    education_2, institution_2, year_2, about_2});
        if (doctor){
            return res.status(200).json({message: "Doctor created successfully"});
        }else{
            return res.status(404).json({message: "Error creating doctor"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"})
    }
    
}
// Admin Doctor Update
const adminUpdateDoctor = async (req, res)=>{
    try {
        const {id} = req.query;
        const {doctor_name, specialization, brief_intro,
            education_1, institution, year, about,
            education_2, institution_2, year_2, about_2} = req.body;
        const updatedDoctor = await Doctor.update({doctor_name, specialization, brief_intro,
            education_1, institution, year, about,
            education_2, institution_2, year_2, about_2}, {where: {id}});
        if (updatedDoctor > 0){
            return res.status(200).json({message: "Doctor updated successfully"});
        }else{
            return res.status(404).json({message: "Doctor not found"})
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"});
    }
}

// Admin Department Page
const adminDepartment = (req, res)=>{
    res.send("Department");
}
// Admin Department Create
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
        if (updatedDepartment > 0){
            return res.status(201).json({message: "Department updated successfully"});
        }else{
            return res.status(404).json({message: "Department not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal Server error"});
    }
};
// Admin Department Delete
const deleteDepartment = async(req, res)=>{
    try {
        const {id} = req.query;
        const deletedDepartment = await Department.destroy({where: {id}});
        if (deletedDepartment){
            return res.status(201).json({message: "Department deleted successfully"});
        }else{
            return res.status(404).json({message: "Department not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Internal server error"});
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
    adminCreateDoctor,
    adminDepartmentCreate,
    createAdmin,
    adminLoginAccess,
    adminLogout,
    updateService,
    adminUpdateDoctor,
    updateDepartment,
    serviceDelete,
    deleteDepartment
}
