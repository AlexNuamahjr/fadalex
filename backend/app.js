const express = require("express");
require("dotenv").config();
const helmet = require('helmet');
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const clientRoutes = require("./routes/clientRoutes");
const adminRoutes = require("./routes/adminRoutes");
const expressSession = require("express-session");
const  APP_SECRET = process.env.APP_SECRET;
const { urlencoded } = require("body-parser");

const app = express();
PORT = process.env.PORT || 8989;
app.use(helmet());
app.use(expressSession({
    secret: APP_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {   }
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: "http://localhost:5173",
}));
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
