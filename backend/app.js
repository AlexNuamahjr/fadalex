const express = require("express");
require("dotenv").config();

const app = express();

PORT = process.env.PORT || 8989;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})