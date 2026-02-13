const express=require("express");
const Product=require("../models/Product");

const router=express.Router();

//Add products
router.post("/",async(req,res)=>{
        console.log("BODY:", req.body);   // 👈 ADD THIS

    const product=new Product(req.body);
    await product.save();
    res.json(product);
});


//Get all products
router.get("/",async(req,res)=>{
    const products=await Product.find();
    res.json(products);
});

module.exports=router;