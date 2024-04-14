const mongoose= require("mongoose")
// External files
// function (connection)
// MAke a unique function name 
// Export 
const connectDatabase= () =>{
    mongoose.connect(process.env.MONGODB_CLOUD).then(()=>{
    console.log("Database Connected")
    })
}
// Exporting the Function
module.exports = connectDatabase
