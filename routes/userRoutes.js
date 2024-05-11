const router = require('express').Router();
const userController = require('../controller/userControllers')

//Creating user registration route 
router.post('/create', userController.createUser);

//controller (Export) - Routes (import) - Use - (index.js)

//exporting the router
module.exports = router;