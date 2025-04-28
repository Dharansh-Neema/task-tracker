const jwtToken = require('jsonwebtoken')

const cookieToken = (user,res)=>{
    const token = jwtToken.sign({id:user._id},process.env.JWT_SECRET,{
        
    });
    console.log(token);
    res.status(200).cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:24*60*60*1000
    })
    .json({
        success:true,
        message:"User created successfully",
        user,
        token :token
    });
}

module.exports = cookieToken;