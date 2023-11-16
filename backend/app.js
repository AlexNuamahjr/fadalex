const express = require("express");
require("dotenv").config();
const helmet = require('helmet');
const dbConnection = require("./config/dbConnection");
const clientRoutes = require("./routes/clientRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
PORT = process.env.PORT || 8989;
app.use(helmet());
app.use("/", clientRoutes);
app.use("/admin", adminRoutes);


app.listen(PORT, ()=>{
    try {
        dbConnection.authenticate();
        console.log(`Server is running on http://localhost:${PORT}`) 
    } catch (error) {
        console.log(error);
    }
    
})
