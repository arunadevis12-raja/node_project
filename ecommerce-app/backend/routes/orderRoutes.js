const express=require("express");
const Order=require("../models/Order");
const router=express.Router();

router.post("/",async(requestAnimationFrame,res)=>{
    const order=new Order(requestAnimationFrame.body);
    await order.save();
    res.json(order);
});

module.exports=router;