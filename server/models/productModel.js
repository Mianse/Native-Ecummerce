import mongoose from "mongoose"
const productSchema = new  mongoose.Schema({
     name:{
        type:String,
        required: [true, 'Please provide a name for the product']
     },description:{
        type:String ,
        required: [true, 'Please provide a description of the product'],
     },
     price:{
        type: Number,
        required: [true, 'Price is required']
     },
     stock:{
        type: Number,
        required:[true, 'Stock quantity is required']
     },
     category:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Category'
     },
     images:[
        {
            public_id:  String,
            url: String
        }
     ]
},{
    timestamps: true //this will add
})

export const  productModel = mongoose.model("product", productSchema)
export default productModel