import Appointment from "../config/models/clientModels/appointmentModel.js";
import Contact from "../config/models/clientModels/contactModel.js";
const clientHome = (req, res)=>{
    res.send("Client Home Page");
}

const clientAbout = (req, res)=>{
    res.send("Client About Page");
}

const clientService = (req, res)=>{
    res.send("Client Service Page");
}

const clientDepartment = (req, res)=>{
    res.send("Client Departments Page");
}

const clientAppointment = (req, res)=>{
    res.send("Client Appointment");
}

const clientAppointmentCreate = async(req, res)=>{
    const {department, doctor, date_, time_, full_name, phone_number, message} = req.body;
    try {
        await Appointment.create({department, doctor, date_, time_, full_name, phone_number, message});
        res.status(201).json({message: "Appointment set successfully"});
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "Something went wrong"});
    }

}

const clientDoctors = (req, res)=>{
    res.send("Client Doctors Page");
}

const clientContact = (req, res)=>{
    res.send("Client Contact Page");
}

const clientContactCreate = async(req, res)=>{
    const {full_name, email, topic, phone_number, message} = req.body;
    try {
        await Contact.create({full_name, email, topic, phone_number, message});
        return res.status(201).json({message: "Message sent successfully"});
    } catch (error) {
        console.log(error);
        return res.status(501).json({message: "Something went wrong"});
    }
}

export {
    clientHome,
    clientAbout,
    clientService,
    clientDoctors,
    clientContact,
    clientDepartment,
    clientContactCreate,
    clientAppointment,
    clientAppointmentCreate
}
