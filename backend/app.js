import express from "express";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import cors from "cors";
import dbConnection from "./config/dbConnection.js";
import clientRoutes from "./routes/clientRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import expressSession from "express-session";
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
