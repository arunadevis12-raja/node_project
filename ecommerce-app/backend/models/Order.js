const mongoose=require("mongoose");

const OrderSchema=new mongoose.Schema({
    products:Array,
    totalAmount:Number,
    status:{type:String,default:"Placed"}
});

module.exports=mongoose.model("Order",OrderSchema);