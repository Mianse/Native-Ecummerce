import DataURIParser from 'datauri/parser.js';
import userModel from '../models/userModel.js';
import  cloudinary from "cloudinary"

import { getDataUri } from '../utils/Feature.js';

export const registerController = async (req, res) => {
    try {
        const { name, password, email, address,city , country, phone } = req.body;

        // Validation
        if (!name || !email || !password || !city || !address || !phone || !country) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields"
            });
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already exists"
            });
        }

        // Create the new user
        const newUser = await userModel.create({name, password, email, address,city , country, phone });

        res.status(201).send({
            success: true,
            message: "Registration successful, please login",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error
        });
    }
};

export const loginController= async(req,res)=>{
    const { email, password } = req.body;

    if(!email||!password){
        return res.status(500).send({
            success: false,
            message:"please provide an email and password"
        })
}

//check user 
const user = await  userModel.findOne({ email});
if (!user) {
   return res.status(500).send({
    success: false,
    message: "User not found"
   })
}

//check pass
const isMatch = await user.comparePassword(password)
if(!isMatch){
    res.status(500).send({
        success:false,
        message: "email or password do not match"
    })
}
    const token = user.generateToken()
    res
    .status(200)
    .cookie("token",token,{ 
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    secure: process.env.NOD_ENV=== "development" ? true:false,
    httpOnly: process.env.NOD_ENV=== "development" ? true:false,
    sameSite: process.env.NOD_ENV=== "development" ? true:false,

}).send({
        success: true,
        message: "login successfully",
        token,
        user
    })
}

export const getUserProfileController = async(req,res)=>{
    try{
        const user = await userModel.findById(req.user._id)
        user.password = undefined
        res.status(200).send({
            success:true,
            message: 'User Info fetched successfully',
            data:user
        })

    }catch(error){
        res.status(500).send({
            success:false,
            message: "error in profile api",
            error:error,
    })
}
}

export const logoutController  =async (req,res)=>{
try {
    res
    .status(200)
    .cookie("token","",{ 
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    secure: process.env.NOD_ENV=== "development" ? true:false,
    httpOnly: process.env.NOD_ENV=== "development" ? true:false,
    sameSite: process.env.NOD_ENV=== "development" ? true:false,

}).send({
    success : true ,
    message:"logged out succesfully"
})
} catch (error) {
   res.status(500).send({
    success: false,
    message:"Error In Logging out api" ,
   }) 
}
}

export const updateUserProfileController = async (req,res)=>{
    try {
        const user = await userModel.findById(req.user._id)
        const {name, password, email, address,city , country, phone}=req.body
        //validation + update
        if(name) user.name= name;
        if(password) user.password=password
        if(email) user.email=email
        if(address) user.address=address
        if(city) user.city=city
        if(country) user.country=country      
        if(phone) user.phone=phone

//save
 await user.save();

res.status(200).send({
    success :true,
    message:"user profil Updated"
})


    } catch (error) {
        res.status(500).json({
        message:" Error in update profile api ",
        error,
    })
    }}

export const updatePasswordController=async (req,res)=> {
    try {
        const user = await userModel.findById(req.user._id)

        const {oldPassword,newPassword}= req.body
                //validation 
                if(!oldPassword || !newPassword){
                    res.status(500).send({
                        success:false,
                        message: "please provide old password and new password!"
                    })
                }
                //old password check
                const isMatch = await user.comparePassword(oldPassword)
                //validation
                if(!isMatch){
                    res.status(500).send({
                        success: false,
                        message: "old password  invalid"
                    })
                }
                user.password = newPassword
                await user.save()
                res.status(200).send({
                    success:  true,
                    message: "Password updated successfully",
                })
    } catch (error) {
       res.status(500).send({
        message: "Error in Update Password API",
        error:error
       }) 
    }
}
//update user profile photo

export const updateProfilePicController = async(req,res)=>{
    try {
        const user = await userModel.findById(req.user._id)
        //get file from client photo
        const file = getDataUri(req.file)
        //delete prev image
       // await cloudinary.v2.uploader.destroy(user.profilePic.public_id)

        //update
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        user.profilePic={
            public_id: cdb.public_id,
            url: cdb.secure_url
        }

        //save
        await user.save()
        res.status(200).send({
            success: true,
            mesaage: "profile pic updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Server Error! Can't upload the profile image."
        })
    }
}