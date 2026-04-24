const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");


const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60, // 5 minutes me
    },
   
});

//  function --> t0 send  emails
async function sendVerificationEmail(email,otp){
    try {
        const mailResponse = await mailSender(
            email,
            "Verification Email from StudyNotion",
            emailTemplate(otp)
        );
        console.log("Email sent successfully: ", mailResponse);
    } catch (error) {
        console.log("Error occurred while sending email: ", error);
        throw error;
    }
    // try {
    //     const mailResponse = await mailSender(email,"Verification Email from StudyNotion",otp);
    //     console.log("Email sent Successfully : ", mailResponse);
    // } catch (error) {
    //     console.log("error  occured while sending mailes:",error);
    //     throw error;
    // }
}

// pre save middleware --> document save hone se phle verification mail bhejna with given data.
OTPSchema.pre("save",async function(next){ // explore why next pass as argument in function.
    //await sendVerificationEmail(this.email, this.otp);  //verification mail
    console.log("New document saved to database");

    if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
    next(); // next middleware me chale jao

}) 

module.exports = mongoose.model("OTP", OTPSchema);



