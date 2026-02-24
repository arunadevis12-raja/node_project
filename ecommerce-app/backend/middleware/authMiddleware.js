const jwt=require("jsonwebtoken");
const JWT_SECRET="mysecretkey";

module.exports=function (req,res,next){
    const token=req.header("Authorization");
    if(!token){
        return res.status(401).json({error:"Access denied"});
    }

    try{
        const verified=jwt.verify(token,JWT_SECRET);
        req.user=verified;
        next();

    }catch(error){
       return res.json(400).json({error:"Invalid Token"})
    }
}