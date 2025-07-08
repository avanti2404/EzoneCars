const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {connectDatabase} = require("./database/db")
const  AdminRouter  = require('./routes/AdminRoutes')
const  ClientRouter  = require('./routes/ClientRoutes')
const {connectCloudinary} = require("./middlewares/Cloudinary")

const initializeAdmin = require('./utils/initializeAdmin');
                                                                                                           
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/admin/",AdminRouter)
app.use("/client/",ClientRouter)

connectDatabase()
initializeAdmin()
connectCloudinary()

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING on ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Backend is working");
})