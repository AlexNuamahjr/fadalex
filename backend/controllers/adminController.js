const User = require("../config/models/adminModels/userModel");
const adminRegister = (req, res)=>{
    res.send("Register");
}

const adminLogin = (req, res) => {
    res.send("Login");
}

const adminHome = (req, res) =>{
    res.send("Home")
}

module.exports = {
    adminLogin,
    adminRegister,
    adminHome
}