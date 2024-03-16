import mongoose from "mongoose"
const categorySchema = new  mongoose.Schema({
     name:{
        type:String,
        required: [true, 'Please provide a name for the category']
       } //this will add
} ,{timestamps: true})

export const  categoryModel = mongoose.model("category", categorySchema)
export default categoryModel