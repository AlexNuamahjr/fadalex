
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

const clientDoctors = (req, res)=>{
    res.send("Client Doctors Page");
}

const clientContact = (req, res)=>{
    res.send("Client Contact Page");
}

module.exports = {
    clientHome,
    clientAbout,
    clientService,
    clientDoctors,
    clientContact,
    clientDepartment
}