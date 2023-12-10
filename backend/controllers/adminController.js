import User from "../config/models/adminModels/userModel.js";
import Service from "../config/models/adminModels/serviceModel.js";
import Departments from "../config/models/adminModels/departmentModel.js";
import Doctor from "../config/models/adminModels/doctorModel.js";
import workingHours from "../config/models/adminModels/workinHoursModel.js";
import bcrypt from "bcrypt";

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
       const currentUser = await User.findOne({where: {is_admin: true}});
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
    res.send("/admin")
};
// Admin Service Page
const adminService = async (req, res)=>{
    try {
        const allServices = await Service.findAll();
        if (allServices.length > 0){
            return res.status(200).json(allServices);
        }else{
            return res.status(404).json({message: "No Service found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"}); 
    }
};
// Admin Service Create
const adminServiceCreate = async(req, res)=>{
    const {service_title, service_content} = req.body;
    try {
        if (!service_title || !service_content){
            return res.status(400).json({message: "Service title and content are required!"});
        }
        const newService = await Service.create({service_title, service_content});
        return res.status(200).json({message: "Service created successfully", service: newService});
    } catch (error) {
        console.error(error);
         // Handle validation errors
         if (error.name === "SequelizeValidationError") {
            const validationErrors = error.errors.map((err) => ({
                message: err.message,
                field: err.path,
                value: err.value,
            }));
            return res.status(400).json({ message: "Validation error", errors: validationErrors });
        }
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
const adminDoctor = async (req, res)=>{
    const allDoctors = await Doctor.findAll();
    if (allDoctors.length > 0){
        return res.status(200).json(allDoctors);
    }else{
        return res.status(400).json({message: "No doctor found!"});
    }
};
// Admin Create Doctor
const adminCreateDoctor = async(req, res)=>{
    const {doctor_name, specialization, brief_intro,
        education_1, institution, year, about,
        education_2, institution_2, year_2, about_2} = req.body;
    try {
        if (!doctor_name || !specialization || !brief_intro ||
            !education_1 || !institution || !year || !about){
                return res.status(400).json({message: "The above fields are required!"})
            }
        const newDoctor = await Doctor.create({doctor_name, specialization, brief_intro,
                                    education_1, institution, year, about,
                                    education_2, institution_2, year_2, about_2});
        return res.status(200).json({message: "Doctor created successfully", doctor: newDoctor});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal server error"})
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
// Admin Delete Doctor
const adminDeleteDoctor = async(req, res)=>{
    try {
        const {id} = req.query;
        const deleteDoctor = await Doctor.destroy({where: {id}});
        if (deleteDoctor){
            return res.status(200).json({message: "Doctor deleted successfully"});
        }else{
            return res.status(500).json({message: "Doctor not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}
// Admin Department Page
const adminDepartment = async (req, res)=>{
    try {
        const allDepartments = await Departments.findAll();
        if (allDepartments.length > 0){
            return res.status(200).json(allDepartments);
        }else{
            return res.status(404).json({message: "No departments found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal sever error"})
    }
    
}
// Admin Department Create
const adminDepartmentCreate = async(req, res)=>{
    const {department_title, department_content} = req.body;
    try {
        if (!department_title || !department_content){
            return res.status(400).json({message: "No departments found"})
        }
        const newDepartment = await Departments.create({department_title, department_content});
        return res.status(200).json({message: "Department created successfully", department: newDepartment});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error!"})
    }
};
// Update Department
const updateDepartment = async(req, res)=>{
    try {
        const {id} = req.query;
        const {department_title, department_content} = req.body;
        const updatedDepartment = await Departments.update({department_title, department_content}, {where: {id}});
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
        const deletedDepartment = await Departments.destroy({where: {id}});
        if (deletedDepartment){
            return res.status(200).json({message: "Department deleted successfully"});
        }else{
            return res.status(404).json({message: "Department not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};
export {
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
    deleteDepartment,
    adminDeleteDoctor
}
