const express=require('express');
const dotenv=require('dotenv').config()
const app=express()
const contactmanager=require('./routes/contactRoutes');
const userManager=require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorHandler');
const conn = require('./config/db');
conn();
const port=process.env.PORT;

app.use(express.json());
app.use("/api/contacts",contactmanager)
app.use("/api/users",userManager)  
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Port listening on ${port}`)
})