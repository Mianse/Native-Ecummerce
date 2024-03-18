import productModel from "../models/productModel.js"
import { getDataUri } from "../utils/Feature.js"
import cloudinary from "cloudinary"

export const getAllProductController =async(req,res)=>{
  try {
    const products = await productModel.find({})
    res.status(200).send({
        success: true,
        message: "Get all products successfully",
        products
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message:"Server error when getting all products",
    })
  }
}

export const getSingleProductController =async(req,res)=>{
    try {
        const product = await productModel.findById(req.params.id)
        //VALIDATION 
        if(!product){
            res.status(401).send({
                success:false,
                message:"The product does not exist!"
            })
        }res.status(200).send({
            success:true,
            message: "get Product successfully",
            product

        })
    } catch (error) {

        console.log(error)
        if(error.name === 'CastError'){
            return res.status(400).send({
              success:false,
              message:'Invalid product ID'
          })
        }
        res.status(500).send({
            success:false,
            message:"error when getting single product"
        })
    }
}

export const createProductController =async(req,res)=>{
try {
    const {name,price,description,category,stock}= req.body;
    //validation 
   
    if(!req.file){
        res.status(400).send({
            success: false,
            message: "please provide product image "
        })
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content)
    const image = {
        public_id: cdb.public_id,
        url: cdb.secure_url
    }
    await productModel.create({
        name, price, description, category, stock,images: [image]
    })
    res.status(201).send({
        success:  true,
        message: "product created successfully",

    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: "error in creating  new product",
        error
    })
}
}


export const updateProductController= async(req,res) =>{    
        try {
            //find product
            const product = await productModel.findById(req.params.id)
            //validation
            if(!product){
                res.status(500).send({
                    success: false,
                    message: "product not available"
                })
            }
            const {name,description,price,stock,category}= req.body;
            //validate and update
            if(name) product.name=name;
            if(description) product.description=description
            if(price) product.price=price
            if(stock) product.stock=stock
            if(category) product.category=category
            await product.save()
            res.status(200).send({
                success:true,
                message:  'product updated',
            })
            
        } catch (error) {
           console.log(error) 
           if(error.name === 'CastError'){
            return res.status(400).send({
              success:false,
              message:'Invalid product ID'
          })
        }
           res.status(500).send({
            success: false,
            message: "error in update product api"
           })
        }
}

export const uploadImageController =async(req,res)=>{
    try {
        // find product
        const product = await productModel.findById(req.params.id);
        //validation 
        if(!product){
            res.status(404).send({
                success: false,
                message: "product not found"
            })
        }
        if(!req.file){
            res.status(404).send({
                success: false,
                message:  "No file uploaded",
            })
        }
        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image ={
            public_id: cdb.public_id,
            url: cdb.secure_url
        }
        //save
        product.images.push(image)
        await product.save()
        res.status(200).send({
            success: true,
            message:"image updated successfully"
        })
    } catch (error) {
        console.log(error);
        if(error.name === 'CastError'){
            return res.status(400).send({
              success:false,
              message:'Invalid product ID'
          })
        }
        res.send({
            success: false,
            message: "server error when updatind image"
        })
    }
}