const mongoose = require("mongoose"); //instances
require("dotenv").config();

exports.connect =()=>{
      mongoose.connect(process.env.MONGODB_URL,{
       // useNewUrlParser: true,
       // useUnifiedTopology: true,
      })
      // In case of succesful connection
      .then(()=>console.log("DB connected Sucessfully !"))
      // In case of Error
      .catch((error)=>{
        console.log("DB Connection Failed !");
        console.error(error); //error kya hai.
        process.exit(1);
      })
};