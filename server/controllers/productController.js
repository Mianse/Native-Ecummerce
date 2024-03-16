import productModel from "../models/productModel.js"

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