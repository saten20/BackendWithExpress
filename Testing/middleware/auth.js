import jwt from 'jsonwebtoken'
import { User } from '../model/user.model.js'

const verifytoken = async(req, res, next) =>{
    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
    if(!token){
        return res.status(400).json({
            success:false,
            message:"token not found"
        })
    }

    const decode = await jwt.verify(token, process.env.SECREAT_KEY)

    const user = await User.findOne({email:decode.email})
    console.log(user)
    req.body = user;
    next()

}

export {
    verifytoken
}