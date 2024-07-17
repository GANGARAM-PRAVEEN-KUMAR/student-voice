const loginModel=require('../model/login.model')
const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken')
require('dotenv')
const secret=process.env.SECRET

const checkUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({"email" : email})
        const role=user.role
        const username=user.username
        const userId=user.userId
         console.log(user)
        if(user && user.password===password){
            
            const existingUser= await loginModel.findOne({"email" : email})
            
            if(!existingUser)
                loginModel.create({"email": email,"password" : password})
                
            jwt.sign({user},secret,(err,token)=>{
                if(!err)
                    res.json({status : "success",token,role,username,userId})
                else
                    res.json({sataus : "fail"})
            })
        }
        else{
            res.json({sataus : "fail"})
        }

    }
    catch(error){
        res.json({sataus : "fail"})
    }
}

module.exports={
    checkUser
}
