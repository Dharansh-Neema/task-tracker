const User = require("../models/user");
const cookieToken = require('../utils/cookieToken')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password,country } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email or password fields are required" });
        }

        const user = await User.create({ name, email, password,country});
        cookieToken(user,res);
    }
    catch (error) {
        res.status(500).json({ message:"Error while signup!",
            error: error.message });
    }
};


exports.login = async(req,res,next)=>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email or password fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        cookieToken(user, res);
    }
    catch (error) {
        res.status(500).json({ message: "Error while login!",
            error: error.message });
    }
};


exports.logout = async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json({
        success: true,
        message: "Logout successfully",
      });
}