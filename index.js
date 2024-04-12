//  Importing the packages (express)
// import express from express
const express = require("express");

// creating an express express.application
const app= express();

//defining a port port range 3000-5000
const PORT = 5500;

// making atesting endpoint 
// End point :POST ,GET ,PUT ,DELETE
app.get('/test',(req,res)=>{
    res.send("Test API is ok and working!...........")
})

// http://localhost:5500/test



// starting the server
app.listen(PORT,()=>{
    console.log(`Server  Running on port ${PORT}`)
})