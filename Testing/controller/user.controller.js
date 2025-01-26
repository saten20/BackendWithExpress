import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";

const registor = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the details",
            });
        }

        const existingUser = await User.findOne({ email });
        console.log(existingUser)

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered",
            });
        }

        const hashPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPass,
            refreshToken: "",
        });

        return res.status(201).json({
            success: true,
            data: user,
            message: "User created successfully",
        });
    } catch (e) {
        console.error("Error while registering the user:", e);
        return res.status(500).json({
            success: false,
            message: "Error while registering the new user",
        });
    }
};


const login = async(req , res)=>{

    try{
        const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"All the Entery is needed"
        })
    }

    const user = await User.findOne({email})
    
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User Not found, Please Registor"
        })
    }
   
    if(await bcrypt.compare(password, user.password)){
        const payload = {
            id:user._id,
            firstName: user.firstName,
            email:user.email
        }
      
        const token =  jwt.sign(payload, process.env.SECREAT_KEY, {expiresIn:'1h'})

        const Options = {
            httpOnly: true,
            secure:false
        }

        return res.status(200)
        .cookie("token", token, Options)
        .json({
            success:true,
            data:user,
            message:"logged in successfully"
        })
     
    }
    
    else{
        return res.status(400).json({
            success:false,
            message:"Password not match"
        })
    }

    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Error while logging User"
        })
    }
}

const dashboard = async(req, res) =>{
    return res.status(200).json({
        success:true, 
        data: req.body,
        message:"Welcome to dashBoard"
    })
}


export {
    registor,
    login,
    dashboard
};
