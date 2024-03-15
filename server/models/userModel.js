import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true , 'Please provide your name']
    },
    email:{
        type: String,
        required: [true,"Please enter your email address"], 
        unique: true
    },
    password:{
        type: String,
        required: [true,"Password is required"], 
        minLenghth:[8,"password lenght should be greater than 8"]
    },
    address:{
        type: String,
        required: [true,"address is required"], 
    },
    city:{
        type: String,
        required: [true,"Please enter your city"], 
    },
    country:{
        type: String,
        required: [true,"Please enter your Country"], 
    },
    phone:{
        type: String,
        required: [true,"Phone is required"], 
        unique: true
    },profilePic:{
        type: String
    }
},{timestamps:true});

//hash funtion
userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,10)

})

//comparee function
userSchema.methods.comparePassword = async function(plainPassword){
    return await bcrypt.compare(plainPassword,this.password);
}
export const userModel = mongoose.model("Users",userSchema);
export default userModel