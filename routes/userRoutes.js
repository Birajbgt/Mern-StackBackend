const router = require('express').Router();
const userController =require('../controller/userControllers')

// creating user registration route
router.post('/create',userController.createUser)

//controller(Export)-Route(import)-use-index.js

//exporting the route
module.exports =router