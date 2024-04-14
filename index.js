//  Importing the packages (express)
// import express from express
const express = require("express");
const connectDatabase = require("./database/database");
const dotenv =require("dotenv")

dotenv.config()

// creating an express express.application
const app= express();

//connecting to database
connectDatabase()
//defining a port port range 3000-6000
const PORT = process.env.PORT;

// making atesting endpoint 
// End point :POST ,GET ,PUT ,DELETE
app.get('/test',(req,res)=>{
    res.send("Test API is ok and working!...........")
})

// http://localhost:5500/test



//configuring the route of user
app.use('/api/user',require('./routes/userRoutes'))
// http://localhost:5500/api/user/create


console.log(`Server  Running on port ${PORT}`)
// starting the server
app.listen(PORT,()=>{
    console.log(`Server  Running on port ${PORT}`)
})