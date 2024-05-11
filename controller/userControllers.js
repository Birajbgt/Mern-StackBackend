const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    //1. Check incoming data
    console.log(req.body);

    //2. Destructure the incoming data
    const { firstName, lastName, email, password } = req.body;

    //3.Validate the data (if empty, stop the process and send res)
    if (!firstName || !lastName || !email || !password) {
        // res.send("Please enter all fields!")
        res.json({
            "success": false,
            "message": "Please enter all fields!"
        })
    }
    //4. Error Handling (Try Catch)
    try {
        //5. Check if the user is already registered
        const existingUser = await userModel.findOne({ email })
        //5.1 If the user is found: Send response
        if (existingUser) {
            return res.json({
                "status": false,
                "message": "User Already Exists!"
            })
        }
        //5.2.1 Hash the password
        // Hashing/Encryption of the password
        const randomSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, randomSalt)

        //5.1.1 Stop the process
        //5.2 if user is new: 
        const newUser = new userModel({
            //Database Fields: Client's Value
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        })


        //5.2.2 Save to the database
        await newUser.save()

        //5.2.3 Send successfull response
        res.json({
            "success": true,
            "message": "User Created Successfuly!"
        })

    } catch (error) {
        console.log(error)
        res.json({
            "success": false,
            "message": "Internal server error"
        })
    }


    // res.send("Created user API is working!")
}

//Write a logic for login
//1. Check incoming data
//2. Destructure the incoming data
//3. Validate the data
//4. Error Handling (Try Catch)
//5. Check if the user is already registered
//5.1 If the user is already registered: 
//5.1.1 Validate the user credentials
//5.1.2 If the password matches: Send user to the home screen
//5.1.3 If the password doesn't match: Send error message

//5.2 if user is new: 
//5.2.1 Send user to the registration page

//login route
//change password

//exporting
module.exports = {
    createUser
}